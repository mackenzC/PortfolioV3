document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = link.getAttribute('data-section');
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    });
});


// Animate wave effect on letters
document.querySelectorAll('.wave-animate').forEach(element => {
    const text = element.textContent;
    element.innerHTML = '';
    [...text].forEach((char, i) => {
    // Preserve spaces
    if (char === ' ') {
        element.innerHTML += ' ';
    } else {
      element.innerHTML += `<span style="animation-delay:${i * 0.07}s">${char}</span>`;
    }
    });
});