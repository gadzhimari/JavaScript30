window.addEventListener('load', init);

function init() {
  let keyCode = '';
  const keysElem = Array.from(document.querySelectorAll('.key'));
  const keys = keysElem.map(elem => elem.dataset.key);

  keysElem.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', onKeyDown);

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  }

  function onKeyDown(event) {
    keyCode = event.keyCode.toString();

    if (keys.indexOf(keyCode) !== -1) {
      let [key, audio] = document.querySelectorAll(`[data-key='${keyCode}']`);

      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }
  }
}
