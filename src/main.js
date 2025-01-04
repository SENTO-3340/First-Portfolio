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
