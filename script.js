const imgbox = document.getElementById('imgbox')
const qrimg = document.getElementById('qrimg')
const qrtext = document.getElementById('qrtext')

function genQR() {
    if (qrtext.value === '') {
        alert("Text Cann't be empty..!");
    } else {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value
        imgbox.classList.add('show-img')
        qrtext.value = ''
    }
}