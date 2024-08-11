
//let heard = document.querySelectorAll('.item__heart')

// heard.forEach(i=>{
// 	i.addEventListener('click',function(){
// 		i.classList.toggle('item__heart--active')
// 	})
// })

document.addEventListener('click', documentAction)
function documentAction(e) {
	let targetElement = e.target
	let logoHeader=document.querySelector('.header__img')
	let menuHeader = document.querySelector('.menu-header')
	let headerBurger = document.querySelector('.header__burger')
	let footerPopular = document.querySelector('.categorier-footer__menu')
	const bodyElement = document.body;
	if(targetElement.classList.contains('header__img')) {
		logoHeader.classList.toggle('activ')
		e.preventDefault()
	}

	if(targetElement.classList.contains("item__like-heart")){
		targetElement.classList.toggle('item__like-heart--active');
	}

	if(targetElement.classList.contains('header__burger')) {
		menuHeader.classList.toggle('menu-header--active')
		headerBurger.classList.toggle('header__burger--active')
		bodyElement.classList.toggle('lock')
	}
	if(targetElement.classList.contains('categorier-footer__menu')){
		footerPopular.classList.toggle('categorier-footer__menu--active')
	}
	
	if(targetElement.closest('[data-spoller]')) {
		const currentElement = targetElement.closest('[data-spoller]')
		currentElement.nextElementSibling.hidden =!currentElement.nextElementSibling.hidden;
	}
	
}

// const spollers = document.querySelectorAll('[data-spoller]')
// if (spollers.length) {
// 	spollers.forEach(spoller => {
// 		spoller.nextElementSibling.hidden = true;
// 	})
// }
//Слайдер 
const heroSwiper = document.querySelector('.hero')

const swiper = new Swiper('.hero', {
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.hero__pagination',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.hero__arrow--next',
	  prevEl: '.hero__arrow--prev',
	},
 });
 
 //let headerElement = document.querySelector('.header').offsetHeight;
 //console.log(headerElement);
 const heroFullscrin = document.querySelector('.hero__slide')
 let headerElement = document.querySelector('.header')
  let heightElement = new ResizeObserver(() => {
	let headerHeight = headerElement.offsetHeight;
	console.log(headerHeight);
	let heightFullscrin = `calc(100vh - ${headerHeight}px)`;
	heroFullscrin.style.minHeight = heightFullscrin;
  })
  heightElement.observe(headerElement);

