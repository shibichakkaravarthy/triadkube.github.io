let menuShown = false;

const navigator = () => {
	console.log('clicked');
	let menu = document.querySelector('.menu');
	let bg = document.querySelector('.menubg');

	if(menuShown === false) {
		menu.style.transform = "rotate(0deg)";
		bg.style.width = "100%";
		 menuShown = true;
	}
	else {
		menu.style.transform = "rotate(-180deg) translateX(25px)";
		bg.style.width = "0vw";
		menuShown = false;
	}
}



const pageRedirection = (name) => {
	console.log(name);
	window.location = name;

}

document.getElementsByName('home')[0].onclick = () => {pageRedirection('index.html')}
document.getElementsByName('about')[0].onclick = () => {pageRedirection('about.html')}
document.getElementsByName('services')[0].onclick = () => {pageRedirection('services.html')}
document.getElementsByName('estimate')[0].onclick = () => {pageRedirection('estimate.html')}

document.getElementsByName('home')[1].onclick = () => {pageRedirection('index.html')}
document.getElementsByName('about')[1].onclick = () => {pageRedirection('about.html')}
document.getElementsByName('services')[1].onclick = () => {pageRedirection('services.html')}
document.getElementsByName('estimate')[1].onclick = () => {pageRedirection('estimate.html')}
