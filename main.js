/* Portfolio behaviour: hash routing, mobile menu, filters, lightbox, copy email, form. */
(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const pages = $$('.page'), links = $$('.nav a'), ids = pages.map((p) => p.id);
  const btn = $('.burger'), nav = $('#nav'), main = $('#main');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Subtle scroll reveal (everything is simply shown if motion is reduced)
  const io = 'IntersectionObserver' in window && !reduce
    ? new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }), { threshold: 0.1 })
    : null;
  $$('.rv').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));

  // Mobile menu
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (!nav.classList.contains('open')) return;
    if (e.key === 'Escape') { setMenu(false); btn.focus(); }
    if (e.key === 'Tab') { // keep focus inside the open menu
      const f = [btn, ...nav.querySelectorAll('a')], i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });

  // Hash routing: one page visible at a time, back button works
  function route() {
    let id = location.hash.slice(1);
    if (id === 'main') return; // skip link
    if (!ids.includes(id)) id = 'home';
    pages.forEach((p) => p.classList.toggle('active', p.id === id));
    links.forEach((a) => a.getAttribute('href') === '#' + id
      ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    setMenu(false);
    window.scrollTo(0, 0);
  }
  addEventListener('hashchange', route);
  route();

  $('.totop').addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0 }); });

  // Project filter chips
  $$('.chip').forEach((c) => c.addEventListener('click', () => {
    $$('.chip').forEach((x) => x.setAttribute('aria-pressed', x === c));
    const f = c.dataset.f;
    $$('#projects .card').forEach((k) => { k.hidden = !(f === 'all' || k.dataset.cat === f); });
  }));

  // Certificate lightbox (native <dialog>: Esc and focus handling built in)
  const lb = $('#lb');
  $$('[data-lb]').forEach((b) => b.addEventListener('click', () => {
    $('#lbt').textContent = b.dataset.lb; lb.showModal();
  }));
  $('#lbx').addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

  // Copy email with clipboard fallback
  $('#copy').addEventListener('click', async () => {
    const el = $('#email'), t = el.textContent.trim();
    try { await navigator.clipboard.writeText(t); }
    catch {
      const r = document.createRange(); r.selectNodeContents(el);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r); document.execCommand('copy');
    }
    $('#cs').textContent = 'Email copied';
  });

  // Contact form: UI only. EDIT: connect Formspree (see comment in index.html) to really send.
  $('#cf').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) { e.target.reportValidity(); return; }
    e.target.hidden = true; $('#thanks').hidden = false;
  });
})();
