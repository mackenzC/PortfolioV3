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



// Eyes follow mouse
document.querySelector('body').addEventListener('mousemove', eyeballFollowMouse);

function eyeballFollowMouse() {
    let eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let angle = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${angle}deg)`;
    });
}

// Eye click detection
document.querySelectorAll('.eye').forEach(eye => {
    eye.addEventListener('click', function() {
        console.log('Eye clicked!');
        this.classList.add('blink');
        
        setTimeout(() => {
            this.classList.remove('blink');
        }, 200);
    });
});



function zoomImage(image) {
    console.log('Image clicked!');
    image.classList.toggle('zoomed');
}

