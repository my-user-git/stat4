document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-content__burger').addEventListener('click', function () {
    document.querySelector('.header-content__nav').classList.add('header-content__active')
  });
  document.querySelector('.header-content__x').addEventListener('click', function () {
    document.querySelector('.header-content__nav').classList.remove('header-content__active');
  });
  document.addEventListener('click', e => {
    const target = e.target;
    console.log(target);
    if (!target.closest('.header-content__burger')) {
      document.querySelector('.header-content__nav').classList.remove('header-content__active');
    };
  });
});
