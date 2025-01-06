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
  const contents = document.querySelectorAll('.fade-in');
  const whiteOrBlack = document.querySelector('.header-fontColor');
  contents.forEach((content) => {
    const distanceToMain = content.offsetTop;
    if (scrollTop >= distanceToMain) {
      content.classList.add('visible');
      whiteOrBlack.classList.add('black');
    }else{
      whiteOrBlack.classList.remove('black');
    }
  });
});
