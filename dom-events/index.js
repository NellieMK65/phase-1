// Event listeners
document.addEventListener('DOMContentLoaded', () => {
	// console.log('The dom is loaded');
	const submitButton = document.getElementById('submit');

	submitButton.addEventListener('click', () => {
		const input = prompt('What is your age');
		const currentYear = new Date().getDate();

		alert(`Your age is ${input}`);
		// server communication comes into play
	});

	const form = document.getElementById('contact-form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const name = document.getElementById('name');
		const message = document.getElementById('message');

		if (!name.value || !message.value) {
			alert(`Please input your fullname and message`);
		} else {
			console.log('Name', name.value);
			console.log('Message', message.value);

			alert(`Your message has been delivered successfully`);
			name.value = '';
			message.value = '';
		}
	});
});
