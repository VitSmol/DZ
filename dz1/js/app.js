const style = document.querySelector(`#style`)
const inputElement = document.getElementById(`checkbox`)

inputElement.addEventListener(`click`, function() {
    style.hasAttribute(`disabled`) ? style.removeAttribute(`disabled`) : style.setAttribute(`disabled`, `true`);
    // this.checked == true ? (style.setAttribute(`href`, flexStyle), changeWidth()) : (style.setAttribute(`href`, floatStyle), changeWidth())
})