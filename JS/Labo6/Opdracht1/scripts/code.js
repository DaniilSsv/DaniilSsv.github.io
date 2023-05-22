const setup = () => {

    const pElements = document.querySelectorAll('p')[0];
    y = pElements.childNodes[0];
    pElements.removeChild(y);
    let textNode = document.createTextNode("Good Job!");
    pElements.appendChild(textNode);
}

window.addEventListener("load", setup);