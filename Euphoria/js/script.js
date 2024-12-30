//=========CLICK===============
document.addEventListener('click', documentAction)
function documentAction(e) {
	let targetElement = e.target
	//let logoHeader=document.querySelector('.header__img')
	let menuHeader = document.querySelector('.menu-header')
	let headerBurger = document.querySelector('.header__burger')
	let footerPopular = document.querySelector('.categorier-footer__menu')
	const bodyElement = document.body;

	if(targetElement.classList.contains("item__like-heart")){
		targetElement.classList.toggle('item__like-heart--active');
		e.preventDefault();
	}

	if(targetElement.classList.contains('header__burger')) {
		menuHeader.classList.toggle('menu-header--active')
		headerBurger.classList.toggle('header__burger--active')
		bodyElement.classList.toggle('lock')
	}
	


	if (targetElement.closest('[data-spoller]')) {
		const currentElement = targetElement.closest('[data-spoller]');
		if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
			currentElement.classList.toggle('active');
		}
		slideToggle(currentElement.nextElementSibling);
	}
	
}
//==============SPOLLER===============

const spollers = document.querySelectorAll('[data-spoller]');

if (spollers.length) {
	spollers.forEach(spoller => {
		spoller.dataset.spoller !== 'open' ? spoller.nextElementSibling.hidden = true : spoller.classList.add('active')
	});
}

let slideDown = (target, duration = 500) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');
		target.hidden = false;
		let height = target.offsetHeight;

		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		target.style.overflow = 'hidden';
		target.style.height = 0;

		target.offsetHeight;

		target.style.transitionProperty = `height, margin, padding`;
		target.style.transitionDuration = `${duration}ms`;

		target.style.height = `${height}px`;

		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('margin-top')

		setTimeout(() => {
			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('--sliding');
		}, duration);
	}
}
let slideUp = (target, duration = 500) => {
	if (!target.classList.contains('--sliding')) {
		target.classList.add('--sliding');
		let height = target.offsetHeight;

		target.style.transitionProperty = `height, margin, padding`;
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${height}px`;

		target.offsetHeight;

		target.style.overflow = 'hidden';
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;

		target.style.height = 0;

		setTimeout(() => {
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-bottom')
			target.style.removeProperty('margin-top')

			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('--sliding');

			target.hidden = true;
		}, duration);
	}
}
let slideToggle = (target, duration = 500) => {
	target.hidden ? slideDown(target, duration) : slideUp(target, duration)
}
//===========Swiper ================
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



//----------Slider-------------
const filterRange = document.querySelector('.price-filter__range')
if(filterRange){
	const filterRangeFrom = document.querySelector('.price-filter__input--from');
	const filterRangeTo = document.querySelector('.price-filter__input--to');
	noUiSlider.create(filterRange, {
		start: [0, 100],
		connect: true,
		range: {
			'min': 0,
			'max': 100
		},
		format: wNumb({
			decimals: 0,
			thousand: '',
			suffix: '€'
	  })
	});
	
	filterRange.noUiSlider.on('update', function (values, handle) {
		filterRangeFrom.value = `${values[0]}`
		filterRangeTo.value = `${values[1]}`
		console.log(handle)
	});
	filterRangeFrom.addEventListener ('change', function(){
		filterRange.noUiSlider.setHandle(0, filterRangeFrom.value)
	})
	filterRangeTo.addEventListener ('change', function(){
		filterRange.noUiSlider.setHandle(1, filterRangeTo.value)
	})
	const filterWomen = document.querySelector('.filter-women')
	if(filterWomen) {
		const breakpoints = `(max-width:991.98px)`
		const matchMedia = window.matchMedia(breakpoints)
		matchMedia.addEventListener('change', (e)=> {
			const isTrue = e.matches
			console.log(e)
			const articles = filterWomen.querySelectorAll('[data-spoller]'); // элементы внутри filter-women с атрибутом data-spoller
        
			if (isTrue) {
				 articles.forEach(article => {
					  slideUp(article.nextElementSibling); // сворачиваем следующий блок после заголовка
					  article.classList.remove('active'); // убираем активный класс
				 });
			} else {
				 articles.forEach(article => {
					  slideDown(article.nextElementSibling); // разворачиваем
					  article.classList.add('active'); // добавляем активный класс
				 });
			}
		})
	}

//height HEADER//

const heroFullscrins = document.querySelectorAll('.hero__slide')
let headerElement = document.querySelector('.header')
let heightElement = new ResizeObserver(() => {
let headerHeight = headerElement.offsetHeight;
let down = document.querySelector('.down')
down.style.marginTop = `${headerHeight}px`;
	heroFullscrins.forEach((heroFullscrin) => {
		let heightFullscrin = `calc(100vh - ${headerHeight}px)`;
		heroFullscrin.style.minHeight = heightFullscrin;
	});
});

heightElement.observe(headerElement);



let pat = document.querySelector('.hero__pagination')
}


//-------JSON Products
const catalogItems = document.querySelector('.catalog__items');
if (catalogItems) {
    loadProducts();
}

async function loadProducts() {
    const response = await fetch("json/products.json", {
        method: "GET",
    });
    if (response.ok) {
        const responseData = await response.json();
        initProducts(responseData);
    }
}

function initProducts(data) {
    const productsList = data.products;
    let productTemplate = ``;
    if (productsList.length) {
        productsList.forEach(productItem => {
            productTemplate += `<article class="item">`;
            productTemplate += `<div class="item__card">`;
            productTemplate += `<a href="product.html" class="item__logo">`;
            productTemplate += `<img src="${productItem.image}" alt="#" class="item__img">`;
            productTemplate += `<a href="#" class="item__heart">`;
            productTemplate += `<img src="/img/icons/heart2.svg" alt="#" class="item__like-heart">`;
            productTemplate += `</a>`;
            productTemplate += `</a>`;
            productTemplate += `</div>`;    
            productTemplate += `<div class="item__body">`;
            productTemplate += `<div class="item__name">`;
            productTemplate += `<div class="item__title"><a href="">White T-Shirt</a></div>`;
            productTemplate += `<div class="item__sub-title"><a href="">Priya’s  Brand</a></div>`;
            productTemplate += `</div>`;
            productTemplate += `<div class="item__prise">$13.00</div>`;
            productTemplate += `</div>`;
            productTemplate += `</article>`;
        });
        catalogItems.innerHTML = productTemplate;
    }
}

// Работа с мужским каталогом
const catalogManItems = document.querySelector('.catalog__man-items');
if (catalogManItems) {
    loadProductsMan();
}

async function loadProductsMan() {
    const response = await fetch("json/man-products.json", {
        method: "GET",
    });
    if (response.ok) {
        const responseData = await response.json();
        initProductsMan(responseData);
    }
}

function initProductsMan(data) {
    const productsList = data.products;
    let productTemplate = ``;
    if (productsList.length) {
        productsList.forEach(productItem => {
            productTemplate += `<article class="item">`;
            productTemplate += `<div class="item__card">`;
            productTemplate += `<a href="product.html" class="item__logo">`;
            productTemplate += `<img src="${productItem.image}" alt="#" class="item__img">`;
            productTemplate += `<a href="#" class="item__heart">`;
            productTemplate += `<img src="/img/icons/heart2.svg" alt="#" class="item__like-heart">`;
            productTemplate += `</a>`;
            productTemplate += `</a>`;
            productTemplate += `</div>`;    
            productTemplate += `<div class="item__body">`;
            productTemplate += `<div class="item__name">`;
            productTemplate += `<div class="item__title"><a href="">White T-Shirt</a></div>`;
            productTemplate += `<div class="item__sub-title"><a href="">Priya’s  Brand</a></div>`;
            productTemplate += `</div>`;
            productTemplate += `<div class="item__prise">$13.00</div>`;
            productTemplate += `</div>`;
            productTemplate += `</article>`;
        });
        catalogManItems.innerHTML = productTemplate;
    }
}
// const catalogItems = document.querySelector('.catalog__items')
// if(catalogItems){
// 	loadProducts()
// }
// async function loadProducts() {
// 	const response = await fetch("json/products.json",{
// 		method:"GET"
// 	})
// 	if(response.ok) {
// 		const responseData = await response.json()
// 		initProducts(responseData)
// 	}
// }

// function initProductsMan(data){
// 	const productsList = data.products
// 	let productTemplate = ``
// 	if(productsList.length){
// 		productsList.forEach(productItem => {
// 			productTemplate += `<article class="item">`
// 			productTemplate += `<div class="item__card">`
// 			productTemplate += `<a href="product.html" class="item__logo">`
// 			productTemplate += `<img src="${productItem.image}" alt="#" class="item__img">`
// 			productTemplate += `<a href="#" class="item__heart">`
// 			productTemplate += `<img src="/img/icons/heart2.svg" alt="#" class="item__like-heart">`
// 			productTemplate += `</a>`
// 			productTemplate += `</a>`
// 			productTemplate += `</div>`	
// 			productTemplate += `<div class="item__body">`
// 			productTemplate += `<div class="item__name">`
// 			productTemplate += `<div class="item__title"><a href="">White T-Shirt</a></div>`
// 			productTemplate += `<div class="item__sub-title"><a href="">Priya’s  Brand</a></div>`
// 			productTemplate += `</div>`
// 			productTemplate += `<div class="item__prise">$13.00</div>`
// 			productTemplate += `</div>`
// 			productTemplate += `</article>`
// 		})
// 		catalogManItems.innerHTML = productTemplate
// 	}
// }


// const catalogMAnItems = document.querySelector('.catalog__man-items')
// if(catalogMAnItems){
// 	loadProductsMan()
// }
// async function loadProductsMan() {
// 	const response = await fetch("json/man-products.json",{
// 		method:"GET"
// 	})
// 	if(response.ok) {
// 		const responseData = await response.json()
// 		initProducts(responseData)
// 	}
// }

// function initProductsMan(data){
// 	const productsList = data.products
// 	let productTemplate = ``
// 	if(productsList.length){
// 		productsList.forEach(productItem => {
// 			productTemplate += `<article class="item">`
// 			productTemplate += `<div class="item__card">`
// 			productTemplate += `<a href="product.html" class="item__logo">`
// 			productTemplate += `<img src="${productItem.image}" alt="#" class="item__img">`
// 			productTemplate += `<a href="#" class="item__heart">`
// 			productTemplate += `<img src="/img/icons/heart2.svg" alt="#" class="item__like-heart">`
// 			productTemplate += `</a>`
// 			productTemplate += `</a>`
// 			productTemplate += `</div>`	
// 			productTemplate += `<div class="item__body">`
// 			productTemplate += `<div class="item__name">`
// 			productTemplate += `<div class="item__title"><a href="">White T-Shirt</a></div>`
// 			productTemplate += `<div class="item__sub-title"><a href="">Priya’s  Brand</a></div>`
// 			productTemplate += `</div>`
// 			productTemplate += `<div class="item__prise">$13.00</div>`
// 			productTemplate += `</div>`
// 			productTemplate += `</article>`
// 		})
// 		catalogItems.innerHTML = productTemplate
// 	}
// }