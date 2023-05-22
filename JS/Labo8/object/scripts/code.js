const setup = () => {
    let student1 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode: 8500,
            city: "Kortrijk"
        },
        age: new Date()
    }
    console.log (student1.age.toString());
    console.log (student1.age.toISOString);
    // toISOString should always return the date in UTC (Z or +00:00).
    // UTC = Coordinated Universal Time
    // UTC is bijna gelijk aan Greenwich Mean Time (GMT). GMT is een zuiver astronomische tijd. Om het door de vertraagde aardrotatie veroorzaakte verschil te compenseren, moeten er schrikkelsecondes worden gebruikt. Het verschil is nooit meer dan een seconde en voor de meeste toepassingen dan ook niet van belang.
    // the toISOString() method converts a Date object into a string, using the ISO standard.
    console.log (student1.firstName);

// uitbreiding

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };

    console.log (student2.address.zipCode);



    let tekst = JSON.stringify(student1);
    console.log (tekst);

    let tekst2 = JSON.stringify(student2);
    console.log (tekst2);

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    let tekst3 = JSON.stringify(students);

    console.log (tekst3);
// omzetten JSON-object naar script-object
    tekstJS = JSON.parse(tekst3);
    console.log ("JsonParse " + tekstJS[0].firstName);


    tekst = JSON.stringify(students[1]);
    console.log (tekst);
}
window.addEventListener("load", setup);