// Tahun di footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Menu mobile
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
});

// Menu aktif mengikuti scroll
const links = [...menu.querySelectorAll('a')];
const secs = links.map(a => document.querySelector(a.getAttribute('href')));
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
secs.forEach(s => s && spy.observe(s));

// Filter proyek
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('on'));
  chip.classList.add('on');
  cards.forEach(card => { card.hidden = chip.dataset.f !== 'all' && card.dataset.c !== chip.dataset.f; });
}));

// Jika foto belum ada, tampilkan inisial
const foto = document.getElementById('foto');
foto.addEventListener('error', () => {
  const s = document.createElement('span');
  s.className = 'initials';
  s.textContent = 'MR';
  foto.replaceWith(s);
});
