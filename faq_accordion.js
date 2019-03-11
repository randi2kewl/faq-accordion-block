document.addEventListener('DOMContentLoaded', function () {
    const toggleAccordion = event => {
        event.target.parentNode.classList.toggle('open');
    };
    document.addEventListener('click', toggleAccordion, true);
});