const setup = () => {

    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].setAttribute("class", "listitem");
    }

    const img = document.createElement('img');
    img.src='images/windows.jpeg';
    //img.setAttribute("src",'images/windows.jpeg');
    document.querySelector("body").appendChild(img);
}
window.addEventListener("load", setup);