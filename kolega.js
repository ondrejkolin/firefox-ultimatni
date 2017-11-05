const interval = setInterval(()=>{
const prvky = document.querySelectorAll("body *");
if (!prvky.length) {
	clearInterval(interval);
	return;
}
let prvek = prvky[Math.floor(Math.random()*prvky.length)];
console.log(prvek);
prvek.remove();
}, 100);

