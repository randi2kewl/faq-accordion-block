document.addEventListener('DOMContentLoaded', function () {
    var toggleAccordion = function(event) {
        event.target.parentNode.classList.toggle('open');
    };


    var accordions = document.getElementsByClassName('faq-accordion');
    for( var i = 0; i < accordions.length; i++ ) {
        accordions[i].addEventListener('click', toggleAccordion, true);
    }

});
