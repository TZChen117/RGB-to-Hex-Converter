const rIndex = document.querySelector('.rIndex')
const gIndex = document.querySelector('.gIndex')
const bIndex = document.querySelector('.bIndex')
const hexIndex = document.querySelector('.hexIndex')
const rImg = document.querySelector('.rImg')
const gImg = document.querySelector('.gImg')
const bImg = document.querySelector('.bImg')
const hexImg = document.querySelector('.hexImg')
const btn = document.querySelector('.btn')

// 網址:http://www.thecolorapi.com/id?format=svg&named=false&hex=0047AB
const url = 'https://www.thecolorapi.com/id?format=svg&named=false&'

// 輸入資料確認是否為數字


// 在按鈕上安裝事件監聽器
btn.addEventListener('click', function () {
  if (rIndex.value === '' || gIndex.value === '' || bIndex.value === '') {
    window.alert('Please key-in content!!!')
  } else if (rIndex.value > 255 || rIndex.value < 0 || (rIndex.value % 1) !== 0 || gIndex.value > 255 || gIndex.value < 0 || (gIndex.value % 1) !== 0 || bIndex.value > 255 || bIndex.value < 0 || (bIndex.value % 1) !== 0) {
    window.alert('Incorrect index!!!')
  } else if (isNaN(rIndex.value) || isNaN(gIndex.value) || isNaN(bIndex.value)){
    window.alert('Key-in not number!!!')
  } else{
    convertHex()
  }
})

// 取得RGB index數值，#00(R)00(G)00(B)
function convertHex(index) {
  let redHex = Number(rIndex.value).toString(16)
  let greenHex = Number(gIndex.value).toString(16)
  let blueHex = Number(bIndex.value).toString(16)
  hexIndex.value = `${padLeft(redHex, 2)}${padLeft(greenHex, 2)}${padLeft(blueHex, 2)}`
  rImg.src = `${url}hex=${padLeft(redHex, 2)}0000`
  gImg.src = `${url}hex=00${padLeft(greenHex, 2)}00`
  bImg.src = `${url}hex=0000${padLeft(greenHex, 2)}`
  hexImg.src = `${url}hex=${hexIndex.value}`
}

// 數字轉換16位數需要保留兩碼
function padLeft(str, lenght) {
  if (str.length >= lenght)
    return str;
  else
    return padLeft("0" + str, lenght);
}