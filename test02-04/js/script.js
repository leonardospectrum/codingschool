//console.log('you are at'+window.location);

var body_colord=prompt('какой будет фон у страницы?');
const body=document.querySelector('body');
body.style.backgroundColor=body_colord;
var text_color=prompt('какой будет цвет текста на странице?');
const text=document.querySelector('p');
text.style.color=text_color;
var name=prompt('как зовут человека, который вас вдохновляет?');
const set_name=document.querySelector('span');
set_name.innerHTML=name;
var img_address=prompt('введите адрес картинки:');
const image=document.querySelector('img');
image.setAttribute('src', img_address);
var information=prompt('введите текст страницы:');
//const inf_position=document.querySelector('');
text.innerHTML=information;
const shortBio=document.querySelector('.shortBio');
shortBio.className+=' animated';
