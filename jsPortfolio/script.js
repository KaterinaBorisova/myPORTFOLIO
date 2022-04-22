let modal = document.querySelector('#myModal');
let certificat = document.querySelector('#myCertificats');
let span = document.querySelector('.close');

certificat.addEventListener('mouseover',() => {
modal.style.display = 'block';
gsap.from('#myModal', {opacity: 0, scale: 0, duration: .7, delay: .3, ease: 'power2.in'})
})
span.addEventListener('onclick',() =>{
    modal.style.display='none';
})
modal.addEventListener('click',() =>{
    modal.style.display = 'none';
})



