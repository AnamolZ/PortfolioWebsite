;(function () {
    'use strict';

    // Adjust full height for specific elements
    var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    };

    // Animate content on scroll
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            } else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '85%' });
    };

    // Initialize Owl Carousel for .owl-carousel3
    var owlCarouselFeatureSlide = function () {
        var owl3 = $('.owl-carousel3');
        owl3.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='icon-arrow-left3 owl-direction'></i>",
                "<i class='icon-arrow-right3 owl-direction'></i>"
            ]
        });
    };

    // Execute functions on document ready
    $(function () {
        fullHeight();
        contentWayPoint();
        owlCarouselFeatureSlide();
    });
})();

// Parallax effect for scroll background
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    document.querySelector('.scroll-image').style.backgroundPosition = 'center ' + (-scrollPosition / 2) + 'px';
});

// Add this to the main.js file
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    document.body.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    themeToggle.addEventListener('click', function() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        const icon = theme === 'dark' ? 'icon-sun' : 'icon-moon';
        themeToggle.innerHTML = `<i class="${icon}"></i>`;
    }
});