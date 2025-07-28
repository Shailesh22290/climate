'use strict';

// DOM utility functions
const $ = (selector, all = false) => {
    if (all) {
        return document.querySelectorAll(selector);
    }
    return document.querySelector(selector);
};

// Header scroll effects
const initHeaderScroll = () => {
    const header = $('.s-header');
    if (!header) return;
    
    let ticking = false;
    
    const updateHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        ticking = false;
    };
    
    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
};

// Mobile menu functionality
const initMobileMenu = () => {
    const menuToggle = $('.s-header__menu-toggle');
    const navWrap = $('.s-header__nav-wrap');
    const navLinks = $('.s-header__nav a[href^="#"]', true);
    
    if (!menuToggle || !navWrap) {
        console.warn('Menu toggle or navigation wrap not found');
        return;
    }
    
    const toggleMenu = () => {
        const isActive = menuToggle.classList.contains('active');
        menuToggle.classList.toggle('active');
        navWrap.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', !isActive);
    };
    
    const closeMenu = () => {
        menuToggle.classList.remove('active');
        navWrap.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    };
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMenu();
            // Ensure smooth scrolling still occurs
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const target = $(href);
                if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navWrap.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navWrap.classList.contains('active')) {
            closeMenu();
            menuToggle.focus();
        }
    });
};
// Publications toggle functionality
const initPublicationsToggle = () => {
    const toggleButton = $('.toggle-button');
    if (!toggleButton) return;
    
    let isExpanded = false;
    
    window.toggleRows = () => {
        const hiddenRows = $('.publication-table .hidden-row', true);
        
        hiddenRows.forEach(row => {
            row.style.display = isExpanded ? 'none' : 'table-row';
        });
        
        isExpanded = !isExpanded;
        toggleButton.textContent = isExpanded ? 'View Less' : 'View More';
        toggleButton.setAttribute('aria-expanded', isExpanded);
        
        if (!isExpanded) {
            const researchSection = $('#research');
            if (researchSection) {
                researchSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    };
};

// Smooth scrolling for navigation
const initSmoothScroll = () => {
    const smoothScrollLinks = $('a.smoothscroll, a[href^="#"]', true);
    const headerHeight = 80;
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href.startsWith('#')) return;
            
            e.preventDefault();
            const targetElement = $(href);
            
            if (!targetElement) return;
            
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active navigation
            updateActiveNav(href);
        });
    });
};

// Update active navigation based on scroll position
const initScrollSpy = () => {
    const sections = $('section[id]', true);
    const navLinks = $('.s-header__nav a[href^="#"]', true);
    let ticking = false;
    
    const updateActiveNav = (activeId = null) => {
        if (!activeId) {
            // Find currently visible section
            const scrollPosition = window.scrollY + 100;
            let found = false;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.offsetTop <= scrollPosition) {
                    activeId = `#${section.id}`;
                    found = true;
                    break;
                }
            }
            
            // If no section is active, clear all active states
            if (!found) {
                navLinks.forEach(link => {
                    link.parentElement.classList.remove('current');
                });
                return;
            }
        }
        
        navLinks.forEach(link => {
            const parent = link.parentElement;
            if (link.getAttribute('href') === activeId) {
                parent.classList.add('current');
            } else {
                parent.classList.remove('current');
            }
        });
    };
    
    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Make updateActiveNav available globally
    window.updateActiveNav = updateActiveNav;
};

// Lazy loading for images
const initLazyLoading = () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        $('img[data-src]', true).forEach(img => imageObserver.observe(img));
    }
};

// Performance optimization: Debounce function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Error handling for external links
const initErrorHandling = () => {
    const externalLinks = $('a[target="_blank"]', true);
    
    externalLinks.forEach(link => {
        link.addEventListener('error', (e) => {
            console.warn('Failed to load external link:', e.target.href);
        });
    });
};

// Initialize all functionality when DOM is ready
const init = () => {
    initHeaderScroll();
    initMobileMenu();
    initPublicationsToggle();
    initSmoothScroll();
    initScrollSpy();
    initLazyLoading();
    initErrorHandling();
};

// DOM ready check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page hidden - pausing operations');
    } else {
        console.log('Page visible - resuming operations');
    }
});


// Preloader

(function() {

    "use strict";

    const preloader = function() {
        const preloaderEl = document.querySelector('#preloader');
        if (!preloaderEl) {
            return;
        }

        // Use DOMContentLoaded for a much faster removal
        document.addEventListener('DOMContentLoaded', function() {
            preloaderEl.classList.add('preloader-hidden');
        });
    };

    preloader();

})();


//header

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const header = document.getElementById('masthead');

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('hidden');
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});