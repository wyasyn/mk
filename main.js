const selectElement = (element) =>document.querySelector(element);

selectElement('.menu').addEventListener("click", () => {
    selectElement('nav').classList.toggle('active');
});
