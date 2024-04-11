/*document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.burger-menu').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.menuList').classList.toggle('active');
    });
    
    var nav = document.querySelector('.sticky-nav');
    var navTop = nav.offsetTop; // Get the initial offset of the navigation

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > navTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.menuList li a'); // Get all menu items

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelector('.burger-menu').classList.remove('active'); // Remove 'active' class from burger menu
            document.querySelector('.menuList').classList.remove('active'); // Remove 'active' class from menu list
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.menuList li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            var targetId = this.getAttribute('href'); // Get the target section ID
            var targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                var offset = targetSection.offsetTop; // Get the top offset of the target section
                window.scrollTo({ top: offset, behavior: 'smooth' }); // Scroll to the target section smoothly
            }
        });
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.burger-menu').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.menuList').classList.toggle('active');
    });
    
    var nav = document.querySelector('.sticky-nav');
    var navTop = nav.offsetTop; // Get the initial offset of the navigation

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > navTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.menuList li a'); // Get all menu items

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelector('.burger-menu').classList.remove('active'); // Remove 'active' class from burger menu
            document.querySelector('.menuList').classList.remove('active'); // Remove 'active' class from menu list
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.menuList li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Check if the link is for an anchor on the same page or a different page
            if (link.getAttribute('href').charAt(0) === '#') {
                // Smooth scrolling for same-page anchors
                event.preventDefault();
                var targetId = link.getAttribute('href');
                var targetSection = document.querySelector(targetId);
                if (targetSection) {
                    var offset = targetSection.offsetTop;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            }
            // Otherwise, let the browser handle navigation for different pages
        });
    });
});

function downloadSTR() {
    var link = document.createElement('a');
    link.href = 'files/STR_Wine Route.pdf';
    link.target = '_blank'; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
