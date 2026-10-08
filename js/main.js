(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* ---------- Language toggle (English is the HTML source, Spanish lives here) ---------- */
  var es = {
    'skip': 'Saltar al contenido',
    'nav.services': 'Servicios',
    'nav.work': 'Trabajos',
    'nav.about': 'Por qué nosotros',
    'nav.contact': 'Contacto',
    'cta.call': 'Llame al (828) 776-0022',
    'cta.estimate': 'Pida un presupuesto gratis',
    'cta.callbar': 'Llame para un presupuesto gratis',
    'hero.kicker': 'Oeste de Carolina del Norte',
    'hero.title': 'Pintura de calidad. <span>Impresiones duraderas.</span>',
    'hero.lede': 'Pintura interior y exterior para casas y negocios en todo el oeste de Carolina del Norte. Líneas limpias, preparación cuidadosa y un acabado que dura.',
    'fact.free': 'Presupuestos gratis',
    'fact.insured': 'Totalmente asegurados',
    'fact.both': 'Residencial y comercial',
    'ph.soon': 'Foto próximamente',
    'ph.hero': 'Proyecto destacado',
    'ph.services': 'En el trabajo',
    'ph.res': 'Proyecto residencial',
    'ph.com': 'Proyecto comercial',
    'services.title': 'Lo que hacemos',
    'services.lede': 'Una sola llamada cubre todo el trabajo, desde el lavado y la preparación hasta la última mano.',
    's1.title': 'Pintura interior',
    's1.text': 'Paredes, techos, molduras y puertas. Protegemos sus pisos y muebles, preparamos las superficies y dejamos el espacio limpio.',
    's2.title': 'Pintura exterior',
    's2.text': 'Revestimiento, molduras, puertas y más, preparados y pintados para resistir el clima de la montaña.',
    's3.title': 'Tinte para madera',
    's3.text': 'Tinte que resalta la madera y la protege del sol y la lluvia.',
    's4.title': 'Lavado a presión',
    's4.text': 'Elimina suciedad, moho y residuos, como servicio aparte o como preparación antes de pintar o teñir.',
    'clients.title': 'Casas y negocios',
    'res.title': 'Residencial',
    'res.text': 'Una sola habitación o la casa completa, por dentro o por fuera. Cuidamos su hogar y terminamos sin demoras.',
    'com.title': 'Comercial',
    'com.text': 'Oficinas, locales y otros espacios de negocio, con horarios que se adaptan al suyo para que el trabajo no se detenga.',
    'work.title': 'Trabajos recientes',
    'work.lede': 'Las fotos de nuestros proyectos están en camino. Mientras tanto, llámenos y con gusto le contamos sobre trabajos como el suyo.',
    'g.exterior': 'Exterior',
    'g.interior': 'Interior',
    'g.staining': 'Tinte para madera',
    'g.washing': 'Lavado a presión',
    'g.commercial': 'Comercial',
    'g.beforeafter': 'Antes y después',
    'about.title': 'Trato directo, del presupuesto a la última mano.',
    'a1.title': 'Presupuestos gratis',
    'a1.text': 'Cuéntenos sobre el trabajo y vamos a verlo. Sin costo y sin compromiso.',
    'a2.title': 'Totalmente asegurados',
    'a2.text': 'Su propiedad está cubierta mientras trabajamos en ella.',
    'a3.title': 'Locales de WNC',
    'a3.text': 'Con base en el oeste de Carolina del Norte, servimos a comunidades de toda la región.',
    'a4.title': 'We speak English',
    'a4.text': 'Le atendemos en español o en inglés, como usted prefiera.',
    'contact.title': 'Pida un presupuesto gratis',
    'contact.lede': 'Llame o escriba con algunos detalles de su proyecto y acordamos una visita para verlo.',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.area': 'Área de servicio',
    'contact.areaValue': 'Oeste de Carolina del Norte',
    'footer.tagline': 'Pintura de calidad. Impresiones duraderas.',
    'footer.insured': 'Totalmente asegurados.'
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var en = {};
  nodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in en)) en[key] = el.innerHTML;
  });
  var langButtons = document.querySelectorAll('.lang button');

  function setLang(lang) {
    var dict = lang === 'es' ? es : en;
    nodes.forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.innerHTML = value;
    });
    root.lang = lang;
    langButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  function storedLang() {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  }

  langButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      setLang(lang);
      try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
    });
  });

  var initial = storedLang() || ((navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  if (initial === 'es') setLang('es');

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.getElementById('mobile-nav');

  function setMenu(open) {
    drawer.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setMenu(drawer.hidden); });
  drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 1080px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });

  /* ---------- Header border once the page scrolls ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal + mobile call bar ---------- */
  var reveals = document.querySelectorAll('.reveal');
  var callBar = document.querySelector('.call-bar');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { revealObserver.observe(el); });

    /* Show the call bar when neither the hero call button nor the contact section is on screen */
    var visible = { hero: true, contact: false };
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id === 'hero-call' ? 'hero' : 'contact'] = entry.isIntersecting;
      });
      var show = !visible.hero && !visible.contact;
      callBar.classList.toggle('is-visible', show);
      callBar.setAttribute('aria-hidden', String(!show));
      callBar.tabIndex = show ? 0 : -1;
    });
    barObserver.observe(document.getElementById('hero-call'));
    barObserver.observe(document.getElementById('contact'));
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
