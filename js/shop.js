var rangeInputMin = document.getElementById('rangemin')
var textRangeMin = document.getElementById('pricemin')
var rangeInputMax = document.getElementById('rangemax')
var textRangeMax = document.getElementById('pricemax')

var minprice = 1000
var maxprice = 20000

document.addEventListener('DOMContentLoaded', function () {
	textRangeMin.innerHTML = `Цена от: ${minprice} ₽`
	textRangeMax.innerHTML = `Цена до: ${maxprice} ₽`
	rangeInputMin.value = minprice
	rangeInputMax.value = maxprice
})

rangeInputMax.addEventListener('input', function () {
	var maxPriceValue = parseInt(rangeInputMax.value)
	var minPriceValue = parseInt(rangeInputMin.value)

	if (maxPriceValue < minPriceValue) {
		maxPriceValue = minPriceValue
		rangeInputMax.value = maxPriceValue
	}

	textRangeMax.textContent = `Цена до: ${maxPriceValue} ₽`
})

rangeInputMin.addEventListener('input', function () {
	var minPriceValue = parseInt(rangeInputMin.value)
	var maxPriceValue = parseInt(rangeInputMax.value)

	if (minPriceValue > maxPriceValue) {
		minPriceValue = maxPriceValue
		rangeInputMin.value = minPriceValue
	}

	textRangeMin.textContent = `Цена от: ${minPriceValue} ₽`
})

function RunFilter(params) {
	var maxPriceValue = parseInt(rangeInputMax.value)
	var minPriceValue = parseInt(rangeInputMin.value)
	var exists = document.getElementById('exists').checked
	var onlybouquet = document.getElementById('bouquetonly').checked
	var orderByAscending = document.getElementById('orderByAscending').checked
	var orderByDescending = document.getElementById('orderByDescending').checked
	var items = document.querySelectorAll('.item')

	var itemsArray = Array.from(items)

	itemsArray.forEach(function (item) {
		var price = parseInt(
			item.querySelector('.title-content a:nth-child(2)').textContent
		)
		var descriptionText = item.querySelector('.description-content').textContent
		var isInStock = descriptionText.includes('В наличии')
		var hasBouquet = descriptionText.includes('Букет')

		if (
			price >= minPriceValue &&
			price <= maxPriceValue &&
			(!exists || isInStock) &&
			(!onlybouquet || hasBouquet)
		) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}

function ResetFilter() {
	var items = document.querySelectorAll('.item')
	items.forEach(function (item) {
		if (item.style.display === 'none') {
			item.style.display = 'block'
		}
	})
}

// var roses = document.getElementById('Roses')
// var violets = document.getElementById('Violets')
// var orchids = document.getElementById('Orchids')
// var lilys = document.getElementById('Lilys')
// var exists = document.getElementById('exists')
// var onlybouquet = document.getElementById('bouquetonly')
// var items = document.querySelectorAll('.item')
