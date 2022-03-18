const contentBlock = document.querySelectorAll('.content')
const infoContainer = document.querySelector(".info").clientWidth
const links = document.querySelectorAll('.link')
const contentContainer = document.querySelector(`.content__container`)

let currentWidth = infoContainer;
let tempInd;
if (window.outerWidth <= 820) {
    contentBlock.forEach(el => {
        console.log(el);
        el.style.width = infoContainer + 'px'
    })
}

window.onresize = () => {
    const infoContainer = document.querySelector(".info").clientWidth
    contentBlock.forEach(el => {
        if (window.outerWidth <= 820) {
                el.style.width = infoContainer + 'px'
                contentContainer.style.transform = `translate(-${tempInd * parseInt(infoContainer)}px)`;
        } else {
                el.style.width = '100%'
                contentContainer.style.transform = `translate(0)`
                // for (let link of links) {
                //     link.classList.remove(`active`)
                // }
                // links[0].classList.add(`active`)
        }
        currentWidth = el.style.width
    })
}

links.forEach((el, ind) => {
    el.addEventListener('click', ()=> {
        tempInd = ind
        console.log(
            currentWidth
        );
        contentContainer.style.transform = `translate(-${ind * parseInt(currentWidth)}px)`;
        for (let link of links) {
            link.classList.remove(`active`)
        }
        links[ind].classList.add(`active`)
    })
})