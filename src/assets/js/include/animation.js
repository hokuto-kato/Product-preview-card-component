import gsap, { Power4 } from 'gsap'

export const animation = () => {
	const fadeIn = document.querySelector('[data-gsap-fade-in]')
	const fadeUp = document.querySelectorAll('[data-gsap-fade-up]')

	// init
	gsap.set(fadeIn, {
		opacity: 0
	})
	gsap.set(fadeUp, {
		opacity: 0,
		y: 10
	})

	//	timeline
	gsap.timeline()
		.to(fadeIn, {
			delay: 0.5,
			opacity: 1,
			duration: 3,
			ease: Power4.easeOut
		})
		.to(
			fadeUp,
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				ease: Power4.easeOut,
				stagger: 0.1
			},
			'-=2.8'
		)
}
