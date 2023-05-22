const setup = () => {

    const divElement = document.querySelector("#myDIV");
    const pElement = document.createElement("p");
    const text = document.createTextNode(" #### ");

    pElement.appendChild(text);
    divElement.appendChild(pElement);
}
window.addEventListener("load", setup);