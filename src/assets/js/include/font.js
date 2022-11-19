import WebFont from 'webfontloader'

export const font = () => {
	const html = document.querySelector('html')
	WebFont.load({
		google: {
			families: ['Noto Sans JP:300,400,500,700']
		}
	})
	setTimeout(() => {
		html.classList.add('wf-inactive')
	}, 3000)
}
