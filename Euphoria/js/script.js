
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
		e.preventDefault();
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
const heroSlider = document.querySelector('.hero')
if(heroSlider) {
	new Swiper('.hero', {
		loop: true,
		speed: 600,
		parallax: true,
		autoHeight: true,
		// If we need pagination
		pagination: {
		  el: '.hero__pagination',
		  clickable: true,
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.hero__arrow--next',
		  prevEl: '.hero__arrow--prev',
		},
	 });
}



// arrival slider//


const arrivalSlider = document.querySelector('.arrival')
if(arrivalSlider) {
	new Swiper('.arrival__slider', {
		loop: true,
		autoHeight: true,
		speed: 300,
		spaceBetween: 38.58,
		slidesPerView: 4,
		// Navigation arrows
		navigation: {
		  nextEl: '.arrival__arrow--next',
		  prevEl: '.arrival__arrow--prev',
		},
		breakpoints: {

			320: {
			  slidesPerView: 2,
			  spaceBetween: 25
			},
			650: {
			  slidesPerView: 3,
			  spaceBetween: 30
			},
			991: {
			  slidesPerView: 4,
			  spaceBetween: 38.6
			}
		 }
	 });
}
//вычисление вісоті шапи//
const heroFullscrins = document.querySelectorAll('.hero__slide')
let headerElement = document.querySelector('.header')
let heightElement = new ResizeObserver(() => {
let headerHeight = headerElement.offsetHeight;
	heroFullscrins.forEach((heroFullscrin) => {
		let heightFullscrin = `calc(100vh - ${headerHeight}px)`;
		heroFullscrin.style.minHeight = heightFullscrin;
	});
  });
  heightElement.observe(headerElement);

 // let testHeight = document.querySelector('').offsetHeight;
  //console.log(testHeight);

let pat = document.querySelector('.hero__pagination')
let patPer = pat.parentElement;
console.log(patPer)

