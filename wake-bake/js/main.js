(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', modal);

    function modal(e) {
        e.preventDefault();

        const modalIcon = e.target.closest('.about__img-button');
        const modalCancel = e.target.closest('.modal__cancel');

        if (!modalIcon && !modalCancel) return;

        if (modalIcon && !document.body.classList.contains('body--opened-modal')) {
            document.body.classList.add('body--opened-modal');
        }

        if (modalCancel && document.body.classList.contains('body--opened-modal')) {
            document.body.classList.remove('body--opened-modal');
        }
    }
});

})()