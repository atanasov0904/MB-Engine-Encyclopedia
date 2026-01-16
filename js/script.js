document.addEventListener('DOMContentLoaded', () => {
    //menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
    //filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.engine-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const category = card.dataset.category;
                card.style.display = (filter === 'all' || category.includes(filter)) ? 'flex' : 'none';
            });
        });
    });
});