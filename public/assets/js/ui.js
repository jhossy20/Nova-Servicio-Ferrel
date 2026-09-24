// Apoyo de las sesiones 3 y 4. Los eventos se estudiarán en la semana 5.
// Este archivo funciona también mientras el estudiante completa la base.
const nav = document.querySelector('.navbar');
const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('#nav-menu');

if (nav && toggle && menu) {
  toggle.hidden = false;
  nav.classList.add('js-menu');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (window.matchMedia('(max-width: 767px)').matches) toggle.focus();
    }
  });
}

const form = document.querySelector('#support-form');
const submit = document.querySelector('#submit-demo');
const status = document.querySelector('#form-status');
if (form && submit && status) {
  form.addEventListener('input', () => {
    status.textContent = '';
  });
  form.addEventListener('submit', (event) => {
    // La validación nativa ocurre ANTES de submit. No usar novalidate.
    event.preventDefault();
    status.textContent = 'Validación completada. No se envió ni guardó ningún ticket.';
  });
  // Permanece deshabilitado si el apoyo no ha cargado.
  submit.disabled = false;
}
