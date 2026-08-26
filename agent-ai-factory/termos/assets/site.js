
(() => {
  const links = [...document.querySelectorAll('.toc a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(a => a.removeAttribute('data-active'));
        const link = links.find(a => a.getAttribute('href') === '#' + entry.target.id);
        if (link) {
          link.setAttribute('data-active','true');
          link.style.background = '#E8F6FC';
          links.filter(a => a !== link).forEach(a => a.style.background = '');
        }
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(s => observer.observe(s));
})();
