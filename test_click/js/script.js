console.log('you are at'+window.location);

const button=document.querySelector('button');
const popup=document.querySelector('.popup');
const closePopup=document.querySelector('.closePopup');

button.addEventListener('click', function(){ 
	popup.style.display='flex'; 
})
closePopup.addEventListener('click', function(){
	popup.style.display='none'; 
})

const menu=document.querySelector('.menu');
const openMenu=document.querySelector('.openMenu');
const closeMenu=document.querySelector('.closeMenu');

openMenu.addEventListener('click', function(){
	menu.style.left=0;
})
closeMenu.addEventListener('click', function(){
	menu.style.left='-50vw';
})