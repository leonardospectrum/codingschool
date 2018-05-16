var money;
var apples, apple_value, apples_value;
var bread, bread_value , breads_value;

money=parseFloat(prompt('сколько денег?'));
apples=parseInt(prompt('сколько яблок?'));
bread=parseInt(prompt('сколько хлеба?'));
apple_value=parseFloat(prompt('цена яблока?'));
bread_value=parseFloat(prompt('цена хлеба?'));
apples_value=apples*apple_value;
breads_value=bread*bread_value;
if (apples_value+breads_value<=money)
{
document.body.innerHTML="<h1>true</h1>";
}
else
{
document.body.innerHTML="<h1>false</h1>";
}