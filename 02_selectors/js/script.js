console.log('you are at'+window.location);

const byTag=document.getElementsByTagName('div');
const byClass=document.getElementsByClassName('myClass');
const byId=document.getElementById('myId');

console.log(byTag, byClass, byId);

const bySelector=document.querySelectorAll('.coolClass.mine');
const firstBySelector=document.querySelector('.coolClass.mine');
console.log(bySelector, firstBySelector);