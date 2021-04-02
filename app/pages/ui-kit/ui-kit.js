// // Import jQuery module (npm i jquery)
import $ from 'jquery'

import ionRangeSlider from 'ion-rangeslider'

document.addEventListener('DOMContentLoaded', () => {

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 15000,
		from: 5000,
		to: 10000,
		skin: "round"
	})

})