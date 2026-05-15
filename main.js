document.addEventListener('DOMContentLoaded', () => {

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  /* ─── Floating Orbs (Canvas) ─── */
  var canvas = document.getElementById('orbs');
  var ctx    = canvas.getContext('2d');
  var W, H, orbs = [];

  function resizeCanvas() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (var i = 0; i < 5; i++) {
    orbs.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 200 + Math.random() * 260,
      dx: (Math.random() - .5) * .35,
      dy: (Math.random() - .5) * .35,
      alpha: .04 + Math.random() * .05
    });
  }

  function drawOrbs() {
    ctx.clearRect(0, 0, W, H);
    orbs.forEach(function (o) {
      var g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      g.addColorStop(0, 'rgba(255,255,255,' + o.alpha + ')');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
      o.x += o.dx; o.y += o.dy;
      if (o.x < -o.r || o.x > W + o.r) o.dx *= -1;
      if (o.y < -o.r || o.y > H + o.r) o.dy *= -1;
    });
    requestAnimationFrame(drawOrbs);
  }
  drawOrbs();

  /* ─── Custom Cursor ─── */
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  gsap.set(dot, { xPercent: -50, yPercent: -50 });
  gsap.set(ring, { xPercent: -50, yPercent: -50 });

  const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
  const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

  const xToRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
  const yToRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });

  var mx = 0, my = 0;

  document.addEventListener('mousemove', (e) => {
    if (dot.style.opacity === "0" || dot.style.opacity === "") {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    }
    mx = e.clientX;
    my = e.clientY;
    xToDot(mx);
    yToDot(my);
    xToRing(mx);
    yToRing(my);
  });

  const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-card, .tech-node, .faq-q, .tl-item, input, textarea');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });

  /* ─── Navbar Hide/Show on Scroll ─── */
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const cur = window.scrollY;
    if (cur > lastScroll && cur > 100) {
      gsap.to(navbar, { y: -110, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power2.out' });
    }
    lastScroll = cur;
  });

  /* ─── Scroll Reveal (GSAP ScrollTrigger) ─── */
  const revealItems = gsap.utils.toArray('.section-header, .project-card, .about-grid, .tech-category, .tech-universe, .faq-wrap, .contact-glass, .tl-item, .timeline, .hero-content, .stat, .ct-info-item, .gh-repo-card, .footer-inner');

  revealItems.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      clearProps: "all"
    });
  });

  /* ─── FAQ Accordion ─── */
  const faqQuestions = document.querySelectorAll('.faq-q');
  faqQuestions.forEach(q => {
    q.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      const ans = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const openAns = openItem.querySelector('.faq-a');
        if (openAns) {
           gsap.to(openAns, { height: 0, opacity: 0, duration: 0.3, onComplete: () => openAns.style.display = 'none' });
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        ans.style.display = 'block';
        gsap.fromTo(ans, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' });
      }
    });
  });

  /* ─── Tech Card Skill Bars Animation ─── */
  gsap.utils.toArray('.tc-bar').forEach((bar, index) => {
    gsap.to(bar, {
      scrollTrigger: {
        trigger: '#skills',
        start: "top 70%",
        toggleActions: "play none none none"
      },
      width: bar.dataset.width + '%',
      duration: 1.2,
      ease: "power2.out",
      delay: index * 0.05
    });
  });

  /* ─── Stats Counter Animation ─── */
  gsap.utils.toArray('.stat-num').forEach(stat => {
    const target = parseInt(stat.dataset.target, 10);
    const obj = { val: 0 };

    gsap.to(obj, {
      scrollTrigger: {
        trigger: '#about',
        start: "top 75%",
        toggleActions: "play none none none"
      },
      val: target,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        stat.textContent = Math.floor(obj.val);
      },
      onComplete: () => {
        stat.textContent = target;
      }
    });
  });

  /* ─── Project Card Hover Lift ─── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -4, duration: 0.22, ease: "power1.out", overwrite: "auto" });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.28, ease: "power1.out", overwrite: "auto" });
    });
  });

  /* ─── Modal ─── */
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBox = document.getElementById('modal-box');
  const modalContent = document.getElementById('modal-content');

  function openModal() {
    modalOverlay.style.display = 'block';
    gsap.fromTo(modalOverlay, { opacity: 0 }, { opacity: 1, duration: 0.32, onComplete: () => {
      modalBox.style.display = 'block';
      gsap.fromTo(modalBox, { opacity: 0 }, { opacity: 1, duration: 0.38, onComplete: () => {
        modalContent.style.display = 'block';
        gsap.fromTo(modalContent, { opacity: 0 }, { opacity: 1, duration: 0.3, delay: 0.15 });
      }});
    }});
  }

  function closeModal() {
    gsap.to(modalContent, { opacity: 0, duration: 0.22, onComplete: () => {
      modalContent.style.display = 'none';
      gsap.to(modalBox, { opacity: 0, duration: 0.3, onComplete: () => {
        modalBox.style.display = 'none';
        gsap.to(modalOverlay, { opacity: 0, duration: 0.28, onComplete: () => {
          modalOverlay.style.display = 'none';
        }});
      }});
    }});
  }

  document.getElementById('btn-book').addEventListener('click', openModal);
  modalOverlay.addEventListener('click', closeModal);
  document.getElementById('modal-close').addEventListener('click', closeModal);

  document.getElementById('modal-goto').addEventListener('click', () => {
    closeModal();
    setTimeout(() => {
      lenis.scrollTo('#contact', { offset: -40, duration: 0.7 });
    }, 500);
  });

  /* ─── Dossier Modal ─── */
  const dossierOverlay = document.getElementById('dossier-overlay');
  const dossierBox = document.getElementById('dossier-box');

  function openDossier() {
    dossierOverlay.style.display = 'block';
    dossierBox.style.display = 'flex';
    gsap.fromTo(dossierOverlay, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(dossierBox, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
    document.body.style.overflow = 'hidden';
  }

  function closeDossier() {
    gsap.to(dossierBox, { opacity: 0, duration: 0.3, onComplete: () => {
      dossierBox.style.display = 'none';
      gsap.to(dossierOverlay, { opacity: 0, duration: 0.28, onComplete: () => {
        dossierOverlay.style.display = 'none';
        document.body.style.overflow = '';
      }});
    }});
  }

  document.getElementById('btn-open-dossier').addEventListener('click', openDossier);
  dossierOverlay.addEventListener('click', closeDossier);
  document.getElementById('dossier-close').addEventListener('click', closeDossier);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeDossier();
    }
  });

  /* ─── Send Button Feedback ─── */
  const btnSend = document.getElementById('btn-send');
  if (btnSend) {
    btnSend.addEventListener('click', function () {
      const lang = localStorage.getItem('lang') || 'en';
      const successMsg  = lang === 'ru' ? 'Сообщение отправлено ✓' : 'Message sent ✓';
      const originalMsg = lang === 'ru' ? 'Отправить сообщение' : 'Send message';

      gsap.to(btnSend, { opacity: 0, duration: 0.2, onComplete: () => {
        btnSend.textContent = successMsg;
        gsap.to(btnSend, { opacity: 1, duration: 0.3 });
        setTimeout(() => {
          gsap.to(btnSend, { opacity: 0, duration: 0.2, onComplete: () => {
            btnSend.textContent = originalMsg;
            gsap.to(btnSend, { opacity: 1, duration: 0.3 });
          }});
        }, 2800);
      }});
    });
  }

  /* ─── Smooth Nav Links ─── */
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      if (target) {
        lenis.scrollTo(target, { offset: -30, duration: 0.8 });
      }
    });
  });

  /* ─── Language Switcher ─── */
  function updateLanguage(lang) {
    localStorage.setItem('lang', lang);
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) btnLang.textContent = lang === 'ru' ? 'ENG' : 'РУС';

    document.querySelectorAll('[data-en], [data-ru]').forEach(el => {
      const text = el.dataset[lang];
      if (text) el.innerHTML = text;
    });

    document.querySelectorAll('[data-en-ph], [data-ru-ph]').forEach(el => {
      const ph = el.dataset[lang + 'Ph'];
      if (ph) el.setAttribute('placeholder', ph);
    });
  }

  var currentLang = localStorage.getItem('lang') || 'en';
  updateLanguage(currentLang);

  const btnLangEl = document.getElementById('btn-lang');
  if (btnLangEl) {
    btnLangEl.addEventListener('click', function () {
      currentLang = currentLang === 'en' ? 'ru' : 'en';
      updateLanguage(currentLang);
    });
  }

  /* ─── Parallax on Tech Universe ─── */
  const techUniverseElements = document.querySelectorAll('.tech-universe');
  document.addEventListener('mousemove', function (e) {
    const cx = (e.clientX / window.innerWidth - .5) * 2;
    const cy = (e.clientY / window.innerHeight - .5) * 2;
    techUniverseElements.forEach(el => {
      el.style.transform = `translate(${cx * 8}px, ${cy * 8}px)`;
    });
  });

  /* ─── Red Team Terminal Line-by-Line Reveal ─── */
  const rtLines = gsap.utils.toArray('.rt-term-body .rt-line');
  if (rtLines.length > 0) {
    gsap.set(rtLines, { opacity: 0, y: 6 });
    ScrollTrigger.create({
      trigger: '#projects',
      start: "top 60%",
      onEnter: () => {
        gsap.to(rtLines, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.18,
          ease: "power1.out"
        });
      },
      once: true
    });
  }

  // ─── GitHub API Integration ───
  (function loadGitHub() {
    var GH_USER = 'aferapokitaysky';
    var API = 'https://api.github.com';

    fetch(API + '/users/' + GH_USER + '/repos?per_page=100&sort=updated')
      .then(function (r) { return r.json(); })
      .then(function (repos) {
        if (!Array.isArray(repos)) return;

        var totalStars = 0;
        var totalForks = 0;
        repos.forEach(function (r) {
          totalStars += r.stargazers_count || 0;
          totalForks += r.forks_count || 0;
        });

        var $repoCount = document.getElementById('gh-repo-count');
        var $starsCount = document.getElementById('gh-stars-count');
        var $forksCount = document.getElementById('gh-forks-count');
        if ($repoCount) $repoCount.textContent = repos.length;
        if ($starsCount) $starsCount.textContent = totalStars;
        if ($forksCount) $forksCount.textContent = totalForks;

        var top = repos
          .filter(function (r) { return !r.fork; })
          .sort(function (a, b) { return (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count); })
          .slice(0, 6);

        var container = document.getElementById('gh-repos');
        if (!container || !top.length) return;

        var langColors = {
          'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'Python': '#3572A5',
          'C++': '#f34b7d', 'C#': '#178600', 'C': '#555555', 'HTML': '#e34c26',
          'CSS': '#563d7c', 'Shell': '#89e051', 'Assembly': '#6E4C13',
          'Batchfile': '#C1F12E', 'PowerShell': '#012456'
        };

        var html = '';
        top.forEach(function (repo) {
          var lang = repo.language || '';
          var color = langColors[lang] || '#8b8b8b';
          var desc = repo.description || '';
          if (desc.length > 90) desc = desc.substring(0, 90) + '…';
          var updated = new Date(repo.pushed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

          html += '<a href="' + repo.html_url + '" target="_blank" rel="noopener" class="gh-repo-card">' +
            '<div class="gh-repo-top">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>' +
              '<span class="gh-repo-name">' + repo.name + '</span>' +
            '</div>' +
            '<p class="gh-repo-desc">' + desc + '</p>' +
            '<div class="gh-repo-meta">' +
              (lang ? '<span class="gh-repo-lang"><span class="gh-lang-dot" style="background:' + color + '"></span>' + lang + '</span>' : '') +
              '<span class="gh-repo-stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> ' + repo.stargazers_count + '</span>' +
              '<span class="gh-repo-stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg> ' + repo.forks_count + '</span>' +
              '<span class="gh-repo-date">' + updated + '</span>' +
            '</div>' +
          '</a>';
        });

        container.innerHTML = html;
        
        // Setup GSAP scroll reveal for dynamically loaded cards
        const repoCards = container.querySelectorAll('.gh-repo-card');
        repoCards.forEach(card => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all"
          });
        });
      })
      .catch(function () { /* silent fail */ });
  })();

  const eyebrow = document.querySelector('.hero-eyebrow');
  if (eyebrow) {
    const eyebrowText = eyebrow.textContent;
    eyebrow.textContent = '';
    setTimeout(function () {
      let idx = 0;
      const typeInterval = setInterval(function () {
        if (idx <= eyebrowText.length) {
          eyebrow.textContent = eyebrowText.substring(0, idx);
          idx++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
    }, 400);
  }

});
