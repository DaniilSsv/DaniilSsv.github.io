let setup = () => {
    tree();
}

const tree = () => {
    let hoogte = 6;
    let ster = '';
    for (let i=0;i<hoogte;i++){
        //accolades enkel bij meerdere lijntjes
        if(i%2)
            ster = ster + "*";
        else
            ster = ster + "+";
        console.log(ster);
    }
}

/*
let  setup = () => {
    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5"];


    console.log (familie.length);



    for (let i = 0; i < familie.length; i=i+2)
    {
        console.log("familielid " + familie[i] );
    }

    // oproepen functie (doorgeven via
    voegNaamToe(familie);

    console.log (familie.join(" - "));
}

const voegNaamToe = (leden) =>
{
    let naam =    prompt("voeg een naam toe");
    leden.push(naam);
    for (let i = 0; i < leden.length; i++)
    {
        console.log("familielid " + leden[i] );
    }

}
*/
window.addEventListener("load", setup);