const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //eventlisteners CSS
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);
}

//mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}

//onClick function
const onClick = () => {
    document.getElementById("event").innerHTML += "Clicked!<br>";
}

//Mouse out function
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

//btnwith- and withoutbullets
const withoutBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for (i=0;i<listItems.length;i++){
        /*listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red";*/
        //2de Manier
        /*listItems[i].className = "listItemsStyleNone colorRed";*/
        //3de Manier
        if (listItems[i].classList.contains("colorWhite")) {
           listItems[i].classList.remove("colorWhite");
           listItems[i].classList.remove("listItemsStyleDisc");
        }
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output "+listItems[i].className);
    }
}
const withBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for (i=0;i<listItems.length;i++){
        /*listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";*/
        //2de Manier
        /*listItems[i].className = "listItemsStyleDisc colorWhite";*/
        //3de Manier
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output "+listItems[i].className);
    }
}

// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}
window.addEventListener("load", setup);