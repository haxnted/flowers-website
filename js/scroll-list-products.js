document.addEventListener('DOMContentLoaded', function () {
	const prevButton = document.querySelector('.prev')
	const nextButton = document.querySelector('.next')
	const items = document.querySelector('.items')
	const productItems = document.querySelectorAll('.product-item')

	let scrollPosition = 0
	let visibleProducts = 4
	let maxScrollPosition = productItems.length - visibleProducts

	updateVisibility()

	nextButton.addEventListener('click', function () {
		if (scrollPosition < maxScrollPosition) {
			scrollPosition++
			updateVisibility()
		}
	})

	prevButton.addEventListener('click', function () {
		if (scrollPosition > 0) {
			scrollPosition--
			updateVisibility()
		}
	})

	function updateVisibility() {
		productItems.forEach((item, index) => {
			if (index < scrollPosition || index >= scrollPosition + visibleProducts) {
				item.style.display = 'none'
			} else {
				item.style.display = 'block'
			}
		})
	}
})

let subMenu = document.getElementById('sub-menu-pc')
function toggleMenu() {
	subMenu.classList.toggle('open-menu')
}
