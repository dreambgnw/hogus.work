document.addEventListener("DOMContentLoaded", () => {
    const loaderOverlay = document.getElementById("loader-overlay");
    const loaderBar = document.querySelector(".loader-bar-inner");
    const loaderLogo = document.querySelector(".loader-logo");

    if (!loaderOverlay) return;

    const shouldShowLoader = () => {
        const navigationEntry = performance.getEntriesByType("navigation")[0];
        const navigationType = navigationEntry ? navigationEntry.type : 'navigate';
        return (navigationType === 'navigate' || navigationType === 'reload');
    };

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            loaderOverlay.classList.add("hidden");
            return;
        }

        if (!shouldShowLoader()) {
            loaderOverlay.classList.add("hidden");
            return;
        }

        loaderOverlay.classList.remove("hidden");
        loaderOverlay.style.display = 'flex';
        
        const minDisplayTime = 2000;
        const minAnimationPromise = new Promise(resolve => setTimeout(resolve, minDisplayTime));
        const fullPageLoadPromise = new Promise(resolve => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', resolve);
            }
        });

        if (loaderBar) {
            setTimeout(() => {
                loaderBar.style.width = '80%';
            }, 100);
        }

        setTimeout(() => {
            if (loaderLogo) {
                loaderLogo.style.opacity = 1;
            }
        }, minDisplayTime * 0.5);

        Promise.all([minAnimationPromise, fullPageLoadPromise]).then(() => {
            if (loaderBar) {
                loaderBar.style.width = '100%';
            }
            setTimeout(() => {
                loaderOverlay.classList.add("hidden");
                loaderOverlay.style.display = "none";
                if (loaderBar) {
                    loaderBar.style.width = '0%';
                }
            }, 500);
        });
    }, { once: true });
    
    if (!loaderOverlay.style.display || loaderOverlay.style.display !== 'flex') {
         loaderOverlay.classList.add("hidden");
    }
});

