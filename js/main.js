document.getElementById('onBulbo').onclick = onBulbo;
document.getElementById('offBulbo').onclick = offBulbo;

function onBulbo() {
  document.getElementById('bulbo').src='http://tpixel.com.mx/image-codepen/bulbo_on.svg';
}

function offBulbo() {
  document.getElementById('bulbo').src='http://tpixel.com.mx/image-codepen/bulbo_off.svg';
}