var list1 = document.getElementById('list1')
var list2 = document.getElementById('list2')
var list3 = document.getElementById('list3')
var item = document.getElementById('pc-submenu')

function toggleDisplay(element) {
	if (element.style.display === 'none') element.style.display = 'block'
	else element.style.display = 'none'
}

function ShowList1() {
	toggleDisplay(list1)
}

function ShowList2() {
	toggleDisplay(list2)
}

function ShowList3() {
	toggleDisplay(list3)
}

function ShowHeaderMenu() {
	toggleDisplay(item)
}
