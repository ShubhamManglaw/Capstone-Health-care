document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                alert(`Thank you, ${name}! Your appointment request has been received. We will contact you at ${email} shortly.`);
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});
