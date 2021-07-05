const navSlide = () => {
	const burger = document.querySelector('.menu-toggle');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const logo = document.querySelector('.logo');
	const burgerStyle = document.querySelectorAll('.menu-toggle span');
	//toggle nav
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');

		//change Color 
		burgerStyle.forEach((item, index)=>{
			if(item.style.backgroundColor){
				item.style.backgroundColor = "";
			}else{
				item.style.backgroundColor = "black";
			}
		});

		//animate Links
		navLinks.forEach((link, index)=>{
			if (link.style.animation) {
				link.style.animation = ``
			}else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.5}s`;
			}
		});

		//Burger Animation
		burger.classList.toggle('toggle');
	});
	

	

	
}

navSlide();