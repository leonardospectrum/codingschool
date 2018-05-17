console.log('you are at'+window.location);

let money;
let apples, apple_value;
let bread, bread_value;

money=parseFloat(prompt('сколько денег?'));
apples=parseInt(prompt('сколько яблок?'));
bread=parseInt(prompt('сколько хлеба?'));
apple_value=parseFloat(prompt('цена яблока?'));
bread_value=parseFloat(prompt('цена хлеба?'));

let haveEnough=(money, apples, bread, apple_value, bread_value)=>{
	let apples_value;
	let breads_value;
	apples_value=apples*apple_value;
	breads_value=bread*bread_value;
	apples_value+breads_value<=money ? document.body.innerHTML="<h1>true</h1>" : document.body.innerHTML="<h1>false</h1>";
}

haveEnough(money, apples, bread, apple_value, bread_value);