function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const maxHeight = content.style.maxHeight;

    // Close other open items
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => {
        item.style.maxHeight = null;
        item.style.padding = "0 60px";
    });

    // Toggle current item
    if (!maxHeight) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "60px";
    }
}

function closeAccordion(element) {
    const content = element.parentElement;
    content.style.maxHeight = null;
    content.style.padding = "0 60px";
    event.stopPropagation(); // Prevent triggering the toggleAccordion function
}
