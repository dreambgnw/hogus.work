document.addEventListener("DOMContentLoaded", () => {
    const loaderOverlay = document.getElementById("loader-overlay");
    const loaderLogo = document.querySelector(".loader-logo");

    // ロードアニメーションを発動させるべきかどうかを判定する関数
    const shouldShowLoader = () => {
        // Navigation Timing APIでナビゲーションタイプを取得
        const navigationEntry = performance.getEntriesByType("navigation")[0];
        const navigationType = navigationEntry ? navigationEntry.type : 'navigate';
        
        // 【修正】'navigate'（初回アクセス、アドレスバー、検索エンジン）または
        // 'reload'（再読み込み）の場合に true を返す
        return (navigationType === 'navigate' || navigationType === 'reload');
    };

    // 【重要：bfcache対策】window.addEventListener('pageshow', ...) でイベントを処理
    window.addEventListener('pageshow', (event) => {
        
        // 1. 【最優先】event.persisted が true の場合（bfcacheからの復元＝戻る/進む）は非表示
        if (event.persisted) {
            loaderOverlay.style.display = "none";
            return;
        }

        // 2. 判定に基づき、ローダーを表示するかどうかを決定
        if (!shouldShowLoader()) {
             // 'navigate'や'reload'ではない場合（例：'back_forward'だがbfcacheではない場合）も非表示
            loaderOverlay.style.display = "none";
            return;
        }

        // ここから、ローダーを表示する処理（初回アクセス または 明示的なリロード時）
        loaderOverlay.style.display = 'flex'; // ローダーを表示
        
        const minDisplayTime = 2000; // 2秒間の最低表示時間
        
        // (以降のPromiseとsetTimeoutの処理は、ロード完了を待機するロジックのため変更不要です)
        const minAnimationPromise = new Promise(resolve => setTimeout(resolve, minDisplayTime));
        const fullPageLoadPromise = new Promise(resolve => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', resolve);
            }
        });

        setTimeout(() => {
            if (loaderLogo) {
                loaderLogo.style.opacity = 1;
            }
        }, minDisplayTime * 0.5);

        Promise.all([minAnimationPromise, fullPageLoadPromise]).then(() => {
            loaderOverlay.classList.add('hidden');
            setTimeout(() => {
                loaderOverlay.style.display = "none";
            }, 500);
        });
    }, { once: true });
    
    // 【初回表示のちらつき対策】
    // DOMContentLoadedのタイミングで、ローダーを初期的に非表示に設定
    // これにより、JavaScriptが実行される前に一瞬表示されることを防ぐ
    if (!loaderOverlay.style.display || loaderOverlay.style.display !== 'flex') {
         loaderOverlay.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const loaderOverlay = document.getElementById("loader-overlay");
    const loaderBar = document.querySelector(".loader-bar"); // バー要素を追加

    // ページがbfcacheから復元された場合（戻る/進む）は、絶対にアニメーションを表示しない
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            // ローダー要素をすぐに隠す（もし表示されていたら）
            loaderOverlay.classList.remove('loading', 'loaded');
            return;
        }

        // ここから、ページが完全に再ロードされた場合の処理
        // 全ページ移動時（初回ロード含む）に発動させるため、ナビゲーションタイプ判定は不要

        // 1. ロード開始アニメーション (プログレスバーを80%まで進める)
        loaderOverlay.classList.add('loading');
        loaderBar.style.width = '80%'; // CSSで定義した80%へ
        
        // 2. 最小表示時間と完全ロード完了を待機
        const minDisplayTime = 500; // プログレスバーの場合、最小表示時間は短くてもOK (0.5秒)

        const minAnimationPromise = new Promise(resolve => setTimeout(resolve, minDisplayTime));
        const fullPageLoadPromise = new Promise(resolve => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', resolve);
            }
        });

        // 3. ロード完了処理
        Promise.all([minAnimationPromise, fullPageLoadPromise]).then(() => {
            // 完了アニメーション (バーを100%にして、フェードアウト)
            loaderOverlay.classList.remove('loading');
            loaderOverlay.classList.add('loaded');
            
            // アニメーションが終わるのを待ってからクラスをリセット
            setTimeout(() => {
                loaderOverlay.classList.remove('loaded');
                loaderBar.style.width = '0%'; // 次回のためにリセット
            }, 700); // CSSの transition 時間よりも少し長めに設定
        });
    }, { once: true });
});