import './index.css'

const components = ['modal', 'navbar', 'reveal-on-scroll', 'simple-todo']

const componentsLinks = components
	.map(
		components =>
			`<li><a class="list__item" target="_blank" href="${components}/index.html">${components}</a></li>`
	)
	.join('')

document
	.querySelector('#root')
	.insertAdjacentHTML(
		'beforeend',
		`<ul class="list list--green">${componentsLinks}</ul>`
	)
