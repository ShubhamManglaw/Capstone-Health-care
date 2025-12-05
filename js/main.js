document.addEventListener('DOMContentLoaded', function () {
    console.log("page loaded");

    var contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log("form submitted");

            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;

            if (name != "" && email != "") {
                alert("Thanks " + name + "! We will contact you soon.");
                contactForm.reset();
            } else {
                alert("Please fill all fields");
            }
        });
    }

    var btn = document.getElementById('theme-toggle');
    var body = document.body;

    if (localStorage.getItem('theme') == 'dark') {
        body.classList.add('dark-mode');
        if (btn) {
            btn.innerHTML = "Light Mode";
        }
    }

    if (btn) {
        btn.onclick = function () {
            console.log("toggle clicked");
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                btn.innerHTML = "Light Mode";
                localStorage.setItem('theme', 'dark');
            } else {
                btn.innerHTML = "Dark Mode";
                localStorage.setItem('theme', 'light');
            }
        };
    }
});
