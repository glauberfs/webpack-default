function component() {
  const btn = document.getElementById('uai_bar_btn');
  const el = document.querySelector('div.uai-bar');
  const wrapper = document.getElementById('uai_bar_nav_side_wrapper');

  let nav = false;

  btn.addEventListener('click', function() {
    if(nav) {
      el.classList.remove('nav-uai-active');
      nav = false;
    } else {
      el.classList.add('nav-uai-active');
      nav = true;
    }
  })

  wrapper.addEventListener('click', function() {
    el.classList.remove('nav-uai-active');
    nav = false;
  });
}