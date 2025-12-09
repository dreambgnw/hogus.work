document.addEventListener('DOMContentLoaded', function() {
    const loaderOverlay = document.getElementById('loader-overlay');
    const loaderLogo = document.querySelector('.loader-logo'); // Get the logo element

    if (!loaderOverlay) {
        return;
    }

    let minDisplayTimeElapsed = false;
    let contentLoaded = false;

    // Function to hide the loader
    function hideLoader() {
        if (minDisplayTimeElapsed && contentLoaded) {
            loaderOverlay.classList.add('hidden');
        }
    }

    // Set a timeout for the minimum display time (2 seconds)
    setTimeout(function() {
        minDisplayTimeElapsed = true;
        hideLoader();
    }, 2000); // 2000 milliseconds = 2 seconds

    // Mark content as loaded
    contentLoaded = true;
    // Make logo visible as soon as content is loaded
    if (loaderLogo) {
        loaderLogo.style.opacity = '1';
    }
    hideLoader(); // Attempt to hide if minDisplayTime has already elapsed
});
