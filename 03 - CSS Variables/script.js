window.addEventListener('DOMContentLoaded', init);

function init() {
  let spacing = document.getElementById('spacing');
  let blur = document.getElementById('blur');
  let color = document.getElementById('base');

  spacing.addEventListener('change', onChangeSpacing);
  blur.addEventListener('change', onChangeBlur);
  color.addEventListener('change', onChangeColor);
}

function onChangeSpacing(event) {
  document.documentElement.style.setProperty('--spacing', `${event.target.value}px`);
}

function onChangeBlur(event) {
  document.documentElement.style.setProperty('--blur', `${event.target.value}px`);
}

function onChangeColor(event) {
  document.documentElement.style.setProperty('--base', event.target.value);
}
