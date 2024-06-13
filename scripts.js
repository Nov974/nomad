let currentIndices = [0, 0, 0];

function changeSlide(carouselIndex, direction) {
    const carousels = document.querySelectorAll('.carousel');
    const slides = carousels[carouselIndex].querySelectorAll('.slide');
    currentIndices[carouselIndex] = (currentIndices[carouselIndex] + direction + slides.length) % slides.length;
    const offset = -currentIndices[carouselIndex] * 100;
    carousels[carouselIndex].querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

(function(){
    emailjs.init("YOUR_USER_ID");
})();

function sendEmail(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
        .then(function(response) {
            alert("Email envoyé avec succès!");
        }, function(error) {
            alert("Erreur lors de l'envoi de l'email.");
        });
}
