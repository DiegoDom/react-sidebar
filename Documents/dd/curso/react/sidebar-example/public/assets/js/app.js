const headerInitFunction = () => {
    const navBar = document.querySelector('.navegacion');

    const openMenuBtn = document.querySelector('.header .header__menu-icon');
    const closeMenuBtn = document.querySelector('.navegacion .navegacion__logo-icon');

    console.log(closeMenuBtn);

    openMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();

        navBar.style.left = '0';
    });

    closeMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navBar.style.left = '-100%';
    });
};