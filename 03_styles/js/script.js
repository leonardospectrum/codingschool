console.log('you are at'+window.location);

const Colored=document.querySelector('.colored');
console.log(Colored);
console.log(Colored.style); 

let quest=prompt('какой ты хочешь цвет?');
Colored.style['background-color']=quest;