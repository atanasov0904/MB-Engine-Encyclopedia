const enginesData = {
    om642: { 
        id: "om642",
        name: "OM642 V6", 
        fullName: "OM642 3.0L V6 Turbo-Diesel", 
        image: "images/aa29a4_5e89f530863b4a2c8d407448c1d3b60f~mv2.jpg.avif", 
        power: "190-265 HP", 
        torque: "440-620 Nm", 
        years: "2005-2018", 
        strengths: ["Икономичност", "Висок въртящ момент", "Балансирана работа"], 
        weaknesses: ["Охладител на маслото", "Уплътнения на турбото"] 
    },
    m113k: { 
        id: "m113k",
        name: "M113K V8", 
        fullName: "M113K 5.4L V8 Supercharged", 
        image: "images/8WveNC5l.jpg", 
        power: "476-517 HP", 
        torque: "700-720 Nm", 
        years: "2002-2006", 
        strengths: ["Изключителна здравина", "Лесен за тунинг", "Брутален звук"], 
        weaknesses: ["Висок разход", "Охлаждане при натоварване"] 
    },
    m104: { 
        id: "m104",
        name: "M104 Inline-6", 
        fullName: "M104 I6 DOHC 24V", 
        image: "images/Mercedes-Benz,_Techno-Classica_2018,_Essen_(IMG_9644).jpg", 
        power: "190-231 HP", 
        torque: "270-315 Nm", 
        years: "1989-1997", 
        strengths: ["Копринено гладка работа", "Класическо инженерство"], 
        weaknesses: ["Инсталация (кабели)", "Гарнитура на главата"] 
    },
    om606: { 
        id: "om606",
        name: "OM606 Inline-6", 
        fullName: "OM606 3.0L Diesel 24V", 
        image: "images/IMG_0077__86684.jpg", 
        power: "134-174 HP", 
        torque: "240-330 Nm", 
        years: "1993-2001", 
        strengths: ["Легендарна надеждност", "Огромен потенциал за мощност"], 
        weaknesses: ["Подгревни свещи", "Вакуумни линии"] 
    }
};

function renderDetails() {
    const id = window.location.hash.slice(1) || 'om642';
    const engine = enginesData[id];
    const container = document.getElementById('engine-detail-content');
    if(!engine || !container) return;

    document.getElementById('breadcrumb-engine').textContent = engine.name;

    // details
    container.innerHTML = `
        <article class="engine-detail">
            <h1>${engine.fullName}</h1>
            <div class="detail-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
                <img src="${engine.image}" alt="${engine.name}" style="width:100%; border-radius:12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div class="quick-specs">
                    <h3 style="margin-top:0;">Технически данни</h3>
                    <table style="width:100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr style="border-bottom: 1px solid #ddd;"><td style="padding:10px; font-weight:bold;">Мощност</td><td>${engine.power}</td></tr>
                        <tr style="border-bottom: 1px solid #ddd;"><td style=
                        <tr style="border-bottom: 1px solid #ddd;"><td style="padding:10px; font-weight:bold;">Въртящ момент</td><td>${engine.torque}</td></tr>
                        <tr style="border-bottom: 1px solid #ddd;"><td style="padding:10px; font-weight:bold;">Производство</td><td>${engine.years}</td></tr>
                    </table>
                    <h3>Предимства:</h3>
                    <ul style="margin-left: 20px;">${engine.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
            </div>
        </article>`;

    renderRelatedEngines(id);
}

function renderRelatedEngines(currentId) {
    const grid = document.getElementById('related-engines-grid');
    if(!grid) return;

    // clear old
    grid.innerHTML = '';

    const related = Object.values(enginesData).filter(e => e.id !== currentId);

    related.forEach(engine => {
        const card = document.createElement('article');
        card.className = 'engine-card';
        card.innerHTML = `
            <div class="engine-image">
                <img src="${engine.image}" alt="${engine.name}">
            </div>
            <div class="engine-content">
                <h3>${engine.name}</h3>
                <p>${engine.power} | ${engine.years}</p>
                <a href="#${engine.id}" class="btn-secondary" style="margin-top:10px; display:inline-block;">Разгледай</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

window.addEventListener('load', renderDetails);

// details on hash change
window.addEventListener('hashchange', () => {
    renderDetails();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll top
});