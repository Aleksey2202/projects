
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
	
	
}