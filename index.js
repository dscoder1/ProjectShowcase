const textElement = document.getElementById("name");
const text = textElement.textContent;  

function animateText() {
    textElement.textContent = "";  

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;  
        span.classList.add('letter');
        span.style.animationDelay = `${index * 0.1}s`; 
        textElement.appendChild(span);
    });

     
    setTimeout(() => {
        animateText(); 
    }, text.length * 100 + 1000);  
}

animateText();
const textElement1 = document.getElementById("what");
const text1 = textElement1.textContent;  

function animateText1() {
    textElement1.textContent = "";  

    text1.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;  
        span.classList.add('letter');
        span.style.animationDelay = `${index * 0.1}s`;  
        textElement1.appendChild(span);
    });

     
    setTimeout(() => {
        animateText1(); 
    }, text.length * 100 + 1000); 
}

animateText1();

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();  
    var contactSection = document.getElementById('contact');

    contactSection.style.display = "block";  
    contactSection.scrollIntoView({ behavior: 'smooth' }); 
});


document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var contactSection = document.getElementById('about');
  
    contactSection.style.display = "block";  
    contactSection.scrollIntoView({ behavior: 'smooth' });  
  }); 