import QRCode from 'qrcode';

// Оновлюємо шлях до сторінки AR
const modelUrl = `${window.location.origin}/ar-model.html`;

const canvas = document.getElementById('qrCanvas');

QRCode.toCanvas(canvas, modelUrl, { width: 300 }, function (error) {
  if (error) console.error(error);
  console.log('QR code generated!');
});
