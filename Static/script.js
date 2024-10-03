function ScrollOpacityEffect(item) {
    let header = document.querySelector(item);
    let scrollPosition = window.pageYOffset;
    header.style.opacity = 1 - scrollPosition / 400;
};

window.addEventListener('scroll', function() {
    ScrollOpacityEffect(".hero");
});