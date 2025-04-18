let card = document.querySelector('.card');
card.addEventListener('mousemove', (e) => {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left - rect.width / 2;
    let y = e.clientY - rect.top - rect.height / 2;

    let rotateX = (x / rect.height) * -30;
    let rotateY = (y / rect.width) * -30;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    let bgx = (x / rect.width) * 50 + 50;
    card.style.backgroundPositionX = `${bgx}%`;
})

card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    let bgx = (x / rect.width) * 50 + 50;
    card.style.backgroundPositionX = ``;
})