const enginesData = {
    om642: { 
        name: "OM642 V6", 
        image: "images/aa29a4_5e89f530863b4a2c8d407448c1d3b60f~mv2.jpg.avif", 
        power: "190-265 HP", 
        torque: "440-620 Nm", 
        years: "2005-2018", 
        strengths: "Икономичност, Въртящ момент" 
    },
    m113k: { 
        name: "M113K V8", 
        image: "images/8WveNC5l.jpg", 
        power: "476-517 HP", 
        torque: "700-720 Nm", 
        years: "2002-2006", 
        strengths: "Здравина, Потенциал" 
    },
    m104: { 
        name: "M104 Inline-6", 
        image: "images/Mercedes-Benz,_Techno-Classica_2018,_Essen_(IMG_9644).jpg", 
        power: "190-231 HP", 
        torque: "270-315 Nm", 
        years: "1989-1997", 
        strengths: "Гладкост, Дълголетие" 
    },
    om606: { 
        name: "OM606 Inline-6", 
        image: "images/IMG_0077__86684.jpg", 
        power: "134-174 HP", 
        torque: "240-330 Nm", 
        years: "1993-2001", 
        strengths: "Надеждност, Милионник" 
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const select1 = document.getElementById('engine1');
    const select2 = document.getElementById('engine2');

    if (!select1 || !select2) return;

    //fill selects
    Object.keys(enginesData).forEach(key => {
        select1.add(new Option(enginesData[key].name, key));
        select2.add(new Option(enginesData[key].name, key));
    });

    //add init val    
    select1.value = 'm113k';
    select2.value = 'om642';

    // update comparison    
    function updateComparison() {
        const e1 = enginesData[select1.value];
        const e2 = enginesData[select2.value];

        //refresh names and images
        document.getElementById('name1').textContent = e1.name;
        document.getElementById('name2').textContent = e2.name;
        document.getElementById('img1').src = e1.image;
        document.getElementById('img2').src = e2.image;

        //refresh specs
        const props = ['years', 'power', 'torque', 'strengths'];
        props.forEach(prop => {
            document.getElementById(prop + '1').textContent = e1[prop];
            document.getElementById(prop + '2').textContent = e2[prop];
        });
    }

    //add event listeners
    select1.addEventListener('change', updateComparison);
    select2.addEventListener('change', updateComparison);

    //initial update
    updateComparison();
});