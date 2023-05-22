const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i=0;i<sliders.length;i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    let boxSave = document.getElementById("save");
    boxSave.addEventListener("click", save);
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let redValue = sliders[0].value;
    let greenValue = sliders[1].value;
    let blueValue = sliders[2].value;
    console.log("values"+redValue+" "+greenValue+" "+blueValue);

    let colorbox = document.getElementById("color");
    colorbox.style.backgroundColor="rgb("+redValue+", "+greenValue+", "+blueValue+")";
}

const save = () => {
    let saveComponents=document.getElementById("saveComponent");
    let save = buildsaveComp();
    saveComponents.appendChild(save);
}

const configureSavedBox = (save) => {
    let red = document.getElementById("sldRed").value;
    save.setAttribute("data-red",red);
    let green = document.getElementById("sldGreen").value;
    save.setAttribute("data-red",green);
    let blue = document.getElementById("sldBlue").value;
    save.setAttribute("data-red",blue);

}

const buildsaveComp = () => {
    let save = document.getElementById("div");
    let btnDelete = document.createElement("input");

    save.className="save";

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("type", "button");
    btnDelete.addEventListener("click", deleteSave);
}



window.addEventListener("load", setup);