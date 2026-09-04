const btn = document.getElementById('langToggle');
let lang = 'el';
btn.addEventListener('click', () => {
  lang = lang === 'el' ? 'en' : 'el';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-el][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  btn.textContent = lang === 'el' ? 'EN' : 'GR';
});
