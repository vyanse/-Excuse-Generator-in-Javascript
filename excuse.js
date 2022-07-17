function botondeexcusa() {
    let excuse = document.getElementById('excuse');
    excuse.innerHTML = excuseGenerator();
}

let excuseGenerator = () => {
    let quien = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let verbo = ['ate', 'peed', 'crushed', 'broke'];
    let que = ['my homework', 'the keys', 'the car'];
    let cuando = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let numeroramdomquien = (Math.floor(Math.random() * 4));
    let numeroramdonverbo = (Math.floor(Math.random() * 4));
    let numeroramdonque = (Math.floor(Math.random() * 3));
    let numeroramdoncuando = (Math.floor(Math.random() * 5));

    return quien[numeroramdomquien] + ' ' + verbo[numeroramdonverbo] + ' ' + que[numeroramdonque] + ' ' + cuando[numeroramdoncuando];
}