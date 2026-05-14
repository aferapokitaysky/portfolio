$(function () {

  /* ─── Floating Orbs (Canvas) ─── */
  var canvas = document.getElementById('orbs');
  var ctx    = canvas.getContext('2d');
  var W, H, orbs = [];

  function resizeCanvas() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  $(window).on('resize', resizeCanvas);

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
  var $dot  = $('#cursor-dot');
  var $ring = $('#cursor-ring');
  var mx = 0, my = 0, rx = 0, ry = 0;

  $(document).on('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    $dot.css({ left: mx, top: my });
  });

  (function movRing() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    $ring.css({ left: rx, top: ry });
    requestAnimationFrame(movRing);
  })();

  $('a, button, .project-card, .tech-card, .tech-node, .faq-q, .tl-item, input, textarea').on('mouseenter', function () {
    $('body').addClass('hovering');
  }).on('mouseleave', function () {
    $('body').removeClass('hovering');
  });

  /* ─── Navbar Hide/Show on Scroll ─── */
  var lastScroll = 0;
  $(window).on('scroll', function () {
    var cur = $(this).scrollTop();
    if (cur > lastScroll && cur > 100) {
      $('#navbar').stop(true).animate({ top: -90 }, 300);
    } else {
      $('#navbar').stop(true).animate({ top: 20 }, 300);
    }
    lastScroll = cur;
  });

  /* ─── Scroll Reveal (Intersection Observer) ─── */
  const revealItems = document.querySelectorAll('.section-header, .project-card, .about-grid, .tech-category, .tech-universe, .faq-wrap, .contact-glass, .tl-item, .timeline, .hero-content, .stat, .ct-info-item, .gh-repo-card, .footer-inner');

  let revealObserver;
  if ('IntersectionObserver' in window) {
    const revealOptions = { threshold: 0.05, rootMargin: '0px 0px -50px 0px' };
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    // Fallback for older browsers
    revealItems.forEach(item => item.classList.add('revealed'));
  }

  /* ─── FAQ Accordion ─── */
  $('.faq-q').on('click', function () {
    var $item = $(this).closest('.faq-item');
    var $ans  = $item.find('.faq-a');
    var open  = $item.hasClass('open');

    $('.faq-item.open').each(function () {
      $(this).removeClass('open')
             .find('.faq-a')
             .stop(true, true)
             .slideUp(320);
    });

    if (!open) {
      $item.addClass('open');
      $ans.stop(true, true).slideDown(360);
    }
  });

  /* ─── Tech Card Skill Bars Animation ─── */
  var techBarsAnimated = false;
  $(window).on('scroll', function () {
    if (techBarsAnimated) return;
    var sec = $('#skills');
    if (!sec.length) return;
    if ($(window).scrollTop() + $(window).height() > sec.offset().top + 200) {
      techBarsAnimated = true;
      $('.tc-bar').each(function (i) {
        var w = $(this).data('width') + '%';
        $(this).delay(i * 100).animate({ width: w }, { duration: 1000, easing: 'swing' });
      });
    }
  });

  /* ─── Stats Counter Animation ─── */
  var statsAnimated = false;
  $(window).on('scroll', function () {
    if (statsAnimated) return;
    var sec = $('#about');
    if (!sec.length) return;
    if ($(window).scrollTop() + $(window).height() > sec.offset().top + 200) {
      statsAnimated = true;
      $('.stat-num').each(function () {
        var $el    = $(this);
        var target = parseInt($el.data('target'));
        $({ val: 0 }).animate({ val: target }, {
          duration: 1800,
          easing: 'swing',
          step: function () { $el.text(Math.floor(this.val)); },
          complete: function () { $el.text(target); }
        });
      });
    }
  });

  /* ─── Project Card Hover Lift ─── */
  $('.project-card').on('mouseenter', function () {
    $(this).stop(true).animate({ marginTop: '-4px' }, { duration: 220, easing: 'swing' });
  }).on('mouseleave', function () {
    $(this).stop(true).animate({ marginTop: '0px' }, { duration: 280, easing: 'swing' });
  });

  /* ─── Modal ─── */
  function openModal() {
    $('#modal-overlay').stop(true, true).fadeIn(320, function () {
      $('#modal-box').stop(true, true).fadeIn(380, function () {
        $('#modal-content').delay(450).fadeIn(300);
      });
    });
  }

  function closeModal() {
    $('#modal-content').stop(true, true).fadeOut(220, function () {
      $('#modal-box').stop(true, true).fadeOut(300, function () {
        $('#modal-overlay').stop(true, true).fadeOut(280);
      });
    });
  }

  $('#btn-book').on('click', openModal);
  $('#modal-overlay, #modal-close').on('click', closeModal);

  $('#modal-goto').on('click', function () {
    closeModal();
    setTimeout(function () {
      $('html, body').animate({ scrollTop: $('#contact').offset().top - 40 }, 700, 'swing');
    }, 500);
  });

  /* ─── Dossier Modal ─── */
  function openDossier() {
    $('#dossier-overlay').stop(true, true).fadeIn(320, function() {
      $('#dossier-box').css('display', 'flex').hide().stop(true, true).fadeIn(380);
    });
    // Prevent body scrolling
    $('body').css('overflow', 'hidden');
  }

  function closeDossier() {
    $('#dossier-box').stop(true, true).fadeOut(300, function() {
      $('#dossier-overlay').stop(true, true).fadeOut(280);
      // Restore body scrolling
      $('body').css('overflow', '');
    });
  }

  $('#btn-open-dossier').on('click', openDossier);
  $('#dossier-overlay, #dossier-close').on('click', closeDossier);

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeDossier();
    }
  });

  /* ─── Send Button Feedback ─── */
  $('#btn-send').on('click', function () {
    var $btn = $(this);
    var lang = localStorage.getItem('lang') || 'en';
    var successMsg  = lang === 'ru' ? 'Сообщение отправлено ✓' : 'Message sent ✓';
    var originalMsg = lang === 'ru' ? 'Отправить сообщение' : 'Send message';

    $btn.stop(true, true)
        .animate({ opacity: 0 }, 200, function () {
          $btn.text(successMsg)
              .animate({ opacity: 1 }, 300);
          setTimeout(function () {
            $btn.animate({ opacity: 0 }, 200, function () {
              $btn.text(originalMsg).animate({ opacity: 1 }, 300);
            });
          }, 2800);
        });
  });

  /* ─── Smooth Nav Links ─── */
  $('.nav-links a').on('click', function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').stop(true).animate(
        { scrollTop: target.offset().top - 30 }, 800, 'swing'
      );
    }
  });

  /* ─── Language Switcher ─── */
  function updateLanguage(lang) {
    localStorage.setItem('lang', lang);
    $('#btn-lang').text(lang === 'ru' ? 'ENG' : 'РУС');

    $('[data-en], [data-ru]').each(function () {
      var $el  = $(this);
      var text = $el.data(lang);
      if (text) $el.html(text);
    });

    $('[data-en-ph], [data-ru-ph]').each(function () {
      var $el = $(this);
      var ph  = $el.data(lang + '-ph');
      if (ph) $el.attr('placeholder', ph);
    });
  }

  var currentLang = localStorage.getItem('lang') || 'en';
  updateLanguage(currentLang);

  $('#btn-lang').on('click', function () {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateLanguage(currentLang);
  });

  /* ─── Parallax on Tech Universe ─── */
  $(document).on('mousemove', function (e) {
    var cx = (e.clientX / window.innerWidth - .5) * 2;
    var cy = (e.clientY / window.innerHeight - .5) * 2;
    $('.tech-universe').css({
      transform: 'translate(' + (cx * 8) + 'px, ' + (cy * 8) + 'px)'
    });
  });

  /* ─── Red Team Terminal Line-by-Line Reveal ─── */
  var rtLines = $('.rt-term-body .rt-line');
  var rtRevealed = false;
  rtLines.css({ opacity: 0, transform: 'translateY(6px)' });

  function revealTerminal() {
    if (rtRevealed) return;
    var $section = $('#projects');
    if (!$section.length) return;
    var sTop = $section.offset().top;
    var wScroll = $(window).scrollTop() + $(window).height();
    if (wScroll > sTop + 200) {
      rtRevealed = true;
      rtLines.each(function (i) {
        var $line = $(this);
        setTimeout(function () {
          $line.animate({ opacity: 1 }, 300).css({ transform: 'translateY(0)', transition: 'transform .3s' });
        }, i * 180);
      });
    }
  }

  $(window).on('scroll', revealTerminal);
  revealTerminal();

  /* ─── Typed effect on hero eyebrow ─── */
  var $eyebrow = $('.hero-eyebrow');
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
        
        // Observe newly created cards for scroll reveal
        if (typeof revealObserver !== 'undefined') {
          $(container).find('.gh-repo-card').each(function() {
            revealObserver.observe(this);
          });
        }
      })
      .catch(function () { /* silent fail */ });
  })();

  var eyebrowText = $eyebrow.text();
  $eyebrow.text('');
  setTimeout(function () {
    var idx = 0;
    var typeInterval = setInterval(function () {
      if (idx <= eyebrowText.length) {
        $eyebrow.text(eyebrowText.substring(0, idx));
        idx++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  }, 400);

});
