const contentBlock = document.querySelectorAll('.content')
const links = document.querySelectorAll('.link')
const contentContainer = document.querySelector(`.content__container`)
const infoContainer = document.querySelector(".info").clientWidth

const inputElement = document.querySelector('#checkbox')
const flexStyle = "css/style1.css"
const floatStyle = "css/style2.css"
const style = document.querySelector(`#style`)
let docBody = document.body

let currentWidth = infoContainer;
let tempInd;

const changeWidthByLoad = () => {
    console.log(`change width`);
    if (docBody.clientWidth <= 820) {
        contentBlock.forEach(el => {
            el.style.width = infoContainer + 'px'
        })
    }
}
changeWidthByLoad()

const changeWidth = () => {
    const infoContainer = document.querySelector(".info").clientWidth
    const contentBlock = document.querySelectorAll('.content')
    contentBlock.forEach(el => {
        if (docBody.clientWidth <= 820) {
                el.style.width = infoContainer + 'px'
                contentContainer.style.transform = `translate(-${tempInd * parseInt(infoContainer)}px)`;
        } else {
                el.style.width = '100%'
                contentContainer.style.transform = `translate(0)`
        }
        currentWidth = el.style.width
    })
}

docBody.onresize = () => {
    changeWidth()
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

inputElement.addEventListener(`click`, function() {
    // this.checked == true ? (style.setAttribute(`href`, flexStyle), changeWidth()) : (style.setAttribute(`href`, floatStyle), changeWidth())
    changeWidth()
    if (this.checked == true) {
        style.setAttribute(`href`, flexStyle);
    } else {
        style.setAttribute(`href`, floatStyle);
    }
})