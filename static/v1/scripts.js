        // --- DOM要素の取得 ---
        const header = document.getElementById('main-header');
        const menuButton = document.getElementById('mobile-menu-button');
        const navLinks = document.getElementById('navbarNav');
        
        const woChar = document.getElementById('wo-char');
        const niChar = document.getElementById('ni-char');
        
        const mainCatchphraseBlock = document.getElementById('main-catchphrase-block');
        const identityAfterH1 = document.getElementById('identity-after-h1');
        const heroDescription = document.getElementById('hero-description');
        const heroButtons = document.getElementById('hero-buttons');
        
        // --- ユーティリティ関数 ---
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        // --- モバイルメニュー制御 ---
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // メニューが開いたら閉じるアイコン（X）に切り替える
            const icon = menuButton.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'bi bi-x-lg';
            } else {
                icon.className = 'bi bi-list';
            }
        });
        
        // リンクをクリックしたらメニューを閉じる
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navLinks.classList.remove('active');
                    menuButton.querySelector('i').className = 'bi bi-list';
                }
            });
        });

        // --- アニメーションロジック ---
        const initializeHeroAnimation = async () => {
            // 【変更点 1】アニメーション開始時に body に no-scroll クラスを追加し、スクロールを禁止
            document.body.classList.add('no-scroll');
            
            await delay(500); 

            mainCatchphraseBlock.style.opacity = '1';
            
            await delay(1500); 
            woChar.style.opacity = '1';
            // CSS変数が定義されていないため、一時的な色を直接指定
            woChar.style.color = '#ffc107'; // 黄色
            
            await delay(1500); 
            niChar.style.opacity = '1';
            // CSS変数が定義されていないため、一時的な色を直接指定
            niChar.style.color = '#28a745'; // 緑色

            await delay(1500); 
            identityAfterH1.style.opacity = '1';
            
            await delay(1000); 
            identityAfterH1.style.opacity = '0';
            
            // 点灯を解除し、元の白字に戻す
            woChar.style.color = 'var(--color-text-main)'; 
            niChar.style.color = 'var(--color-text-main)'; 


            await delay(300); 
            heroDescription.style.opacity = '1';

            await delay(300); 
            heroButtons.style.opacity = '1';

            startSlideshowDelayed();
            
            await delay(500); 
            header.style.opacity = '1';

            // 【変更点 2】全てのアニメーション完了後に no-scroll クラスを削除し、スクロールを再開
            document.body.classList.remove('no-scroll');
        };
        

        // --- 背景スライドショーロジック ---
        let currentSlide = 0;
        const slides = document.querySelectorAll('#hero-slideshow .slide');
        let slideshowInterval = null; 

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        const startSlideshowDelayed = () => {
            if (slides.length > 0) {
                showSlide(currentSlide);
                slideshowInterval = setInterval(nextSlide, 5000); 
            }
        };

        // --- スクロール制御 (ヘッダーの背景変更) ---
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerHeight = window.innerHeight * 0.6; 

            if (scrollY > triggerHeight) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };

        /**
         * フォーム送信のダミー処理
         */
        function handleContactForm(event) {
            event.preventDefault();
            const messageDiv = document.getElementById('contact-message');
            const name = event.target[0].value || '匿名';
            
            messageDiv.innerHTML = `
                ${name}さん、メッセージをありがとうございます！<br>
                <span style="font-weight: 700; font-size: 1.25rem; color: #ffc107;">【重要】このフォームは静的なデモです。</span><br>
                メッセージは実際には送信されていません。ご連絡は<a href="mailto:me@ivstrook.tech" style="text-decoration: underline; color: #ffc107; font-weight: 700;">me@ivstrook.tech</a>へ直接お願いいたします。
            `;
            messageDiv.style.display = 'block';
        }

        const initialize = () => {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); 
            initializeHeroAnimation();
        };

        window.onload = initialize;
