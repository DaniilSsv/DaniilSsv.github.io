const setup = () => {
    //maakt een <p></p> aan en steekt in element
    let element = document.createElement("p");
    //geeft je p element de classe color
    element.setAttribute("class", "color");
    //maakt een text node aan met Hello World! erin
    let textNode = document.createTextNode("Hello World!");
    //je voegt de textnode toe aan je element p
    //dus krijg je <p>Hello world!</p> in let element
    element.appendChild(textNode);
    //hier kies je waar dat je hem zal toepassen
    document.querySelector("#myDiv").appendChild(element);

}
window.addEventListener("load", setup);