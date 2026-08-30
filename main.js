document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    if (!reducedMotion) {
      gsap.from('.site-header', { y: -90, opacity: 0, duration: .7, ease: 'power3.out' });
      gsap.from('.hero-copy > *', { y: 35, opacity: 0, duration: .8, stagger: .1, delay: .15, ease: 'power3.out' });
      gsap.from('.hero-machine', { scale: .92, opacity: 0, duration: 1, delay: .35, ease: 'power3.out' });
      document.querySelectorAll('.reveal').forEach((element) => {
        gsap.from(element, { scrollTrigger: { trigger: element, start: 'top 86%', once: true }, y: 42, opacity: 0, duration: .75, ease: 'power2.out' });
      });
    }
  }

  const header = document.getElementById('site-header');
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollDirection = document.getElementById('scroll-direction');
  let previousScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const scrollingDown = currentScroll > previousScroll;
    const scrollLimit = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle('hidden', scrollingDown && currentScroll > 160);
    scrollDirection.classList.toggle('up', !scrollingDown);
    scrollDirection.classList.add('pulse');
    window.clearTimeout(scrollDirection.pulseTimer);
    scrollDirection.pulseTimer = window.setTimeout(() => scrollDirection.classList.remove('pulse'), 140);
    scrollProgress.style.transform = `scaleX(${scrollLimit > 0 ? currentScroll / scrollLimit : 0})`;
    previousScroll = currentScroll;
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  });

  const cursor = document.getElementById('cursor');
  if (canHover && cursor) {
    const cursorLabel = cursor.querySelector('.cursor-label');
    window.addEventListener('pointermove', (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.classList.add('visible');
    });
    document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
    document.addEventListener('pointerdown', () => cursor.classList.add('click'));
    document.addEventListener('pointerup', () => cursor.classList.remove('click'));
    document.querySelectorAll('a, button, [data-cursor]').forEach((element) => {
      element.addEventListener('pointerenter', () => {
        if (element.classList.contains('tech-object')) {
          cursor.classList.add('tech');
          cursorLabel.textContent = '';
          return;
        }
        cursor.classList.add('hot');
        cursorLabel.textContent = element.dataset.cursor || (element.tagName === 'A' ? 'Open' : 'Select');
      });
      element.addEventListener('pointerleave', () => {
        cursor.classList.remove('hot', 'tech');
        cursorLabel.textContent = '';
        element.style.transform = '';
      });
      if (element.matches('.button, .header-cta, .contact-links a, .contact-links button, .project-actions a')) {
        element.addEventListener('pointermove', (event) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * .08;
          const y = (event.clientY - rect.top - rect.height / 2) * .08;
          element.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    });
  }

  const machine = document.getElementById('hero-machine');
  const scene = document.getElementById('machine-scene');
  if (machine && scene && canHover && !reducedMotion) {
    machine.addEventListener('pointermove', (event) => {
      const rect = machine.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      scene.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 12}deg)`;
    });
    machine.addEventListener('pointerleave', () => { scene.style.transform = ''; });
  }

  document.querySelectorAll('.tech-object').forEach((node) => {
    node.addEventListener('click', () => {
      node.classList.toggle('active');
      node.querySelector('.tech-solid')?.animate([
        { transform: 'rotate(-4deg) scale(1)' },
        { transform: 'rotate(4deg) scale(1.12)' },
        { transform: 'rotate(-4deg) scale(1)' }
      ], { duration: 480, easing: 'cubic-bezier(.2,.8,.2,1)' });
    });
  });

  document.querySelectorAll('.section').forEach((section) => {
    const signal = document.createElement('div');
    signal.className = 'section-signal';
    signal.setAttribute('aria-hidden', 'true');
    signal.innerHTML = '<span></span><i></i><i></i><i></i><span></span>';
    section.appendChild(signal);
  });

  const navigationLinks = [...document.querySelectorAll('.nav a')];
  const observedSections = navigationLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-35% 0px -55%', threshold: 0 });
  observedSections.forEach((section) => sectionObserver.observe(section));

  if (window.gsap && window.ScrollTrigger && !reducedMotion) {
    document.querySelectorAll('.project-media img').forEach((image) => {
      gsap.fromTo(image, { yPercent: -3, scale: 1.06 }, {
        yPercent: 3,
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: image.closest('.project'), start: 'top bottom', end: 'bottom top', scrub: .8 }
      });
    });
  }

  const langButton = document.getElementById('lang');
  let language = localStorage.getItem('portfolio-language') || 'en';
  const applyLanguage = (nextLanguage) => {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-ru]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    langButton.textContent = language === 'en' ? 'RU' : 'EN';
    localStorage.setItem('portfolio-language', language);
  };
  applyLanguage(language);
  langButton.addEventListener('click', () => applyLanguage(language === 'en' ? 'ru' : 'en'));

  const discordButton = document.getElementById('copy-discord');
  discordButton.addEventListener('click', async () => {
    const label = discordButton.querySelector('i');
    try {
      await navigator.clipboard.writeText('office.cia.gov');
      label.textContent = language === 'en' ? 'Copied' : 'Скопировано';
    } catch {
      label.textContent = 'office.cia.gov';
    }
    window.setTimeout(() => { label.textContent = language === 'en' ? 'Copy' : 'Копировать'; }, 1800);
  });

  const fetchGitHub = async () => {
    const repoList = document.getElementById('repo-list');
    try {
      const response = await fetch('https://api.github.com/users/aferapokitaysky/repos?sort=updated&per_page=100');
      if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
      const repositories = await response.json();
      const visibleRepositories = repositories.filter((repo) => !repo.fork).sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at) - new Date(a.updated_at)));
      document.getElementById('gh-repos').textContent = visibleRepositories.length;
      document.getElementById('gh-stars').textContent = visibleRepositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
      document.getElementById('gh-forks').textContent = visibleRepositories.reduce((sum, repo) => sum + repo.forks_count, 0);
      repoList.replaceChildren();
      visibleRepositories.slice(0, 6).forEach((repo) => {
        const card = document.createElement('a');
        card.className = 'repo-card';
        card.href = repo.html_url;
        card.target = '_blank';
        card.rel = 'noopener';
        const title = document.createElement('h3');
        title.textContent = repo.name;
        const description = document.createElement('p');
        description.textContent = repo.description || (language === 'en' ? 'No description.' : 'Без описания.');
        const meta = document.createElement('div');
        meta.className = 'repo-meta';
        meta.textContent = `${repo.language || 'Code'}   ★ ${repo.stargazers_count}   ⑂ ${repo.forks_count}`;
        card.append(title, description, meta);
        repoList.appendChild(card);
      });
    } catch (error) {
      repoList.innerHTML = `<p class="repo-loading">${language === 'en' ? 'GitHub data is unavailable right now.' : 'Данные GitHub сейчас недоступны.'}</p>`;
      console.warn(error.message);
    }
  };
  fetchGitHub();
  document.getElementById('year').textContent = new Date().getFullYear();

  const canvas = document.getElementById('signal-canvas');
  if (!canvas || reducedMotion) return;
  const context = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let points = [];
  const resizeCanvas = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(52, Math.max(24, Math.floor(width / 28)));
    points = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16 }));
  };
  const renderCanvas = () => {
    context.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;
      context.fillStyle = 'rgba(135,165,210,.32)';
      context.fillRect(point.x, point.y, 1, 1);
      for (let otherIndex = index + 1; otherIndex < points.length; otherIndex += 1) {
        const other = points[otherIndex];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 145) {
          context.strokeStyle = `rgba(110,168,255,${(1 - distance / 145) * .07})`;
          context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke();
        }
      }
    });
    requestAnimationFrame(renderCanvas);
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  renderCanvas();
});
