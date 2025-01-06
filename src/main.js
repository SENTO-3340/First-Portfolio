// ハンバーガーメニューの制御
const toggleHum = document.querySelector('.hum');
const toggleText = document.querySelector('.hum-guide');
const toggleNav = document.querySelector('.header-nav');
toggleHum.addEventListener('click', () => {
  toggleHum.classList.toggle('is-active');
  toggleNav.classList.toggle('is-active');
  if (toggleText.textContent === 'open') {
    toggleText.textContent = 'close';
  } else {
    toggleText.textContent = 'open';
  }
});

// ナビのリンクをクリックしたらハンバーガーメニューを閉じる制御
toggleNav.addEventListener('click', () => {
  toggleHum.classList.remove('is-active');
  toggleNav.classList.remove('is-active');
  toggleText.textContent = 'open';
});

// スクロールに伴うfade-in制御、header文字色制御
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  const fadeIn = document.querySelectorAll('.fade-in');
  fadeIn.forEach((content) => {
    const distanceToMain = content.offsetTop;
    if (scrollTop >= distanceToMain) {
      content.classList.add('visible');
    } else {
      content.classList.remove('visible');
    }
  });

//headerの文字色をスクロールに伴い変化させる制御 
  const mainMove = document.querySelector('.main-move');
  const color = {
    header: document.querySelector('.header-inner'),
    nav: document.querySelector('.header-nav'),
    humLine: document.querySelectorAll('.hum-line'),
  };
  color.humLine.forEach((line) => {
    const distanceToMove = mainMove.offsetTop;
    const height = mainMove.offsetHeight;
    if (scrollTop >= distanceToMove + height) {
      color.header.classList.add('black');
      color.nav.classList.add('black');
      line.classList.add('black');
    } else {
      color.header.classList.remove('black');
      color.nav.classList.remove('black');
      line.classList.remove('black');
    }
  });
});
