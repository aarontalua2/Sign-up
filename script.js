const formItems = document.querySelectorAll(`.form-item`);
const password = document.querySelector('#password')
const confirmPassword = document.querySelector(`#confirm-password`)



formItems.forEach(item => {
	const hasHint = item.querySelector(`.hint`)
	if (hasHint) {
		const hintedInput = item.querySelector('input');
		
		hintedInput.addEventListener('keyup', function(e) {
			if (hintedInput.matches(':invalid') ){
				item.querySelector('.hint').style.visibility = 'visible'
			} else {
				item.querySelector('.hint').style.visibility = 'hidden'
			}
		})
	}

});

const validatePasswords = function(e) {
	
	if (password.value != confirmPassword.value) {
		confirmPassword.nextElementSibling.style.visibility = 'visible'		
	} else {
		confirmPassword.nextElementSibling.style.visibility = 'hidden'
	}
}

confirmPassword.addEventListener('keyup', validatePasswords)
password.addEventListener('keyup', validatePasswords)