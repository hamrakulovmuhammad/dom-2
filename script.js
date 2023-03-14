let BtmOne = document.querySelector('.one')
let BtmTwo = document.querySelector(".two")
let text= document.querySelector('h3')
let imags = document.querySelector('#imags')


BtmOne.onclick = () => {
    imags.setAttribute('src', 'img/balck.png')
    BtmOne.classList.add('active')
    BtmTwo.classList.remove('active')
    BtmTwo.classList.remove('.active_two')
    if (text.innerHTML !== "White") {
        text.innerHTML = "White"
    } 
}
BtmTwo.onclick = () => {
    imags.setAttribute('src', "img/silver.png")
    BtmTwo.classList.add('active')
    BtmOne.classList.remove('active')
    if (text.innerHTML === "White") {
        text.innerHTML = "Space Gray"
    }

}
let clic = document.querySelectorAll('button')
let h3 = document.querySelector('h2')
let dolor = {
    "512 GB SSD": '$1,999',
    "+$200": '$2,199',
    "+$600": '$2,599',
    "+$1,200": '$3,199'
}

clic.forEach(btn => {
    btn.onclick = () => {
        h3.innerHTML = (dolor[btn.lastChild.previousSibling.innerHTML]);
    };
});