window.addEventListener('load', init);

function init() {
  var keyCode;
  var prevItem;
  var keys = [];
  var keysList = document.querySelectorAll('.key');

  Array.prototype.forEach.call(keysList, (elem) => {
    keys.push(elem.dataset.key);
  });

  document.addEventListener('keydown', onKeyDown);

  function onKeyDown(event) {
    keyCode = event.keyCode.toString();

    if (keys.indexOf(keyCode) !== -1) {
      let [activeItem, activeSound] = document.querySelectorAll(`[data-key='${keyCode}']`);

      if (prevItem !== undefined) {
        prevItem.classList.remove('playing');
      }

      prevItem = activeItem;
      activeItem.classList.add('playing');
      activeSound.play();
    }
  }
}
