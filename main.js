import QRCode from 'qrcode';

// Оновлюємо шлях до сторінки AR
const modelUrl = `https://qr-test-theta.vercel.app/`;

const canvas = document.getElementById('qrCanvas');

QRCode.toCanvas(canvas, modelUrl, { width: 300 }, function (error) {
  if (error) console.error(error);
  console.log('QR code generated!');
});
