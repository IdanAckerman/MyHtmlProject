function downloadCV() {
    var link = document.createElement('a');
    link.href = 'Idan Ackerman CV-en.pdf';
    link.target = '_blank'; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function flashButton() {
    var button = document.getElementById("btn-download-cv");
    var flashes = 0;
    var interval = setInterval(function () {
        if (flashes % 2 === 0) {
            button.style.backgroundColor = "#0056b3";
        } else {
            button.style.backgroundColor = "#007bff";
        }
        flashes++;
        if (flashes === 6) { // Flash three times (6 times total with on/off intervals)
            clearInterval(interval);
            button.style.backgroundColor = "#007bff";
        }
    }, 500);
}

/*document.addEventListener("DOMContentLoaded", function() {
    var resumeLink = document.getElementById("resume-link");
    var downloadButton = document.getElementById("btn-download-cv");
    
    resumeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        flashButton(); // Call the flashButton function
        var targetId = resumeLink.getAttribute("href").substring(1); // Get the target section ID
        var targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            var offset = targetSection.offsetTop; // Get the top offset of the target section
            window.scrollTo({ top: offset, behavior: 'smooth' }); // Scroll to the target section
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('.sticky-nav');
    var navTop = nav.offsetTop; // Get the initial offset of the navigation

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > navTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    var resumeLink = document.getElementById("resume-link");
    var downloadButton = document.getElementById("btn-download-cv");
    
    resumeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        flashButton(); // Call the flashButton function
        var targetId = resumeLink.getAttribute("href").substring(1); // Get the target section ID
        var targetSection = document.getElementById(targetId); // Find the target section
        if (targetSection) {
            var offset = targetSection.offsetTop; // Get the top offset of the target section
            window.scrollTo({ top: offset, behavior: 'smooth' }); // Scroll to the target section
        }
    });

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
});

