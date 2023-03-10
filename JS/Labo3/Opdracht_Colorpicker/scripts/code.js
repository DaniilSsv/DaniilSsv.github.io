const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i=0;i<sliders.length;i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
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
window.addEventListener("load", setup);