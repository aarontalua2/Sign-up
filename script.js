const password = document.querySelector(`#password`);
const confirmPassword = document.querySelector(`#confirm-password`);
const passwordLabel = document.querySelector(`[for='confirm-password']`);
const notMatchWarning = document.createElement("span");
notMatchWarning.textContent = ` *Passwords do not match.`;
notMatchWarning.classList.add("not-match");

const valueCheck = function (e) {
	if (password.value != confirmPassword.value) {
		passwordLabel.appendChild(notMatchWarning);
		console.log("not match");
	} else {
		console.log("match");
		passwordLabel.textContent = `Confirm Password`;
	}
};
confirmPassword.addEventListener(`keyup`, valueCheck);
