document.addEventListener('DOMContentLoaded', function () {
    var dropdownItems = document.querySelectorAll('.has-dropdown');

    for (var i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].addEventListener('click', function (event) {
            event.preventDefault();

            var dropdown = this.querySelector('.dropdown');

            if (dropdown) {
                if (dropdown.classList.contains('open')) {
                    dropdown.classList.remove('open');
                } else {
                    var openDropdowns = document.querySelectorAll('.dropdown.open');
                    for (var j = 0; j < openDropdowns.length; j++) {
                        openDropdowns[j].classList.remove('open');
                    }

                    dropdown.classList.add('open');
                }
            } else {
                var link = this.querySelector('a');
                window.location.href = link.getAttribute('href');
            }
        });
    }

    document.addEventListener('click', function (event) {
        var target = event.target;
        var menu = document.getElementById('menu');
        if (!menu.contains(target)) {
            var openDropdowns = document.querySelectorAll('.dropdown.open');
            for (var k = 0; k < openDropdowns.length; k++) {
                openDropdowns[k].classList.remove('open');
            }
        }
    });
});
