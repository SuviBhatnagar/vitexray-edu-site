(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  function setMenu(open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('open', open);
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  var hdr = document.querySelector('.site-header');
  function onScroll() { hdr.classList.toggle('scrolled', window.scrollY > 8); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  document.getElementById('yr').textContent = new Date().getFullYear();

  var form = document.getElementById('enquiry-form');
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    if (!f.name.value.trim() || !f.email.validity.valid || !f.email.value || !f.status.value) {
      status.textContent = 'Please enter your name, a valid email and select what you are.';
      status.classList.add('err');
      return;
    }
    status.classList.remove('err');
    var body = 'Name: ' + f.name.value + '\nEmail: ' + f.email.value + '\nPhone: ' + (f.phone.value || '-') +
      '\nStatus: ' + f.status.value + '\n\n' + (f.message.value || '');
    window.location.href = 'mailto:admin@vitexray.com?subject=' + encodeURIComponent('Vitexray Edu enquiry') +
      '&body=' + encodeURIComponent(body);
    status.textContent = 'Opening your email app. If nothing opens, write to admin@vitexray.com or call +1 380 279 4464.';
  });
})();
