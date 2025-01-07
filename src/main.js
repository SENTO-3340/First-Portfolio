// 操作用DOM取得
const mainMove = document.querySelector('.main-move');
const header = document.querySelector('.header-inner');
const nav = document.querySelector('.header-nav');
const humButton = document.querySelector('.hum');
const humGuide = document.querySelector('.hum-guide');
const humLine = document.querySelectorAll('.hum-line');

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
  humLine.forEach((line) => {
    const distanceToMove = mainMove.offsetTop;
    const height = mainMove.offsetHeight;
    if (scrollTop >= distanceToMove + height) {
      header.classList.add('black');
      line.classList.add('black');
    } else {
      header.classList.remove('black');
      line.classList.remove('black');
    }
  });
});

// ハンバーガーメニューの制御
humButton.addEventListener('click', () => {
  humButton.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  if (humGuide.textContent === 'open') {
    humGuide.textContent = 'close';
  } else {
    humGuide.textContent = 'open';
  }
});

// ナビのリンクをクリックしたらハンバーガーメニューを閉じる制御
nav.addEventListener('click', () => {
  nav.classList.remove('is-active');
  nav.classList.remove('is-active');
  humGuide.textContent = 'open';
});
