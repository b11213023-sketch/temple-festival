/* 聖殿節 · 互動腳本 */
(function () {
  'use strict';

  // 行動版選單
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '開啟選單');
  }

  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) closeNav();
  });

  // 捲動時切換 header 樣式
  const header = document.querySelector('.site-header');
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 捲動進場動畫
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // 報名表單（僅示範，不傳送資料）
  const form = document.getElementById('joinForm');
  const msg = document.getElementById('formMsg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (!name || !email) {
      msg.textContent = '請填寫姓名與 E-mail。';
      msg.classList.remove('is-success');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = 'E-mail 格式似乎不正確，請再確認。';
      msg.classList.remove('is-success');
      return;
    }

    msg.textContent = '感謝你，' + name + '！已收到你的報名意願（範例訊息）。';
    msg.classList.add('is-success');
    form.reset();
  });

  // 頁尾年份
  document.getElementById('year').textContent = new Date().getFullYear();
})();
