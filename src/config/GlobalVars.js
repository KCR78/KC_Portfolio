export const dataPattern = {
	email: /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i,
	password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
	alphaNumeric: /^[a-zA-Z0-9_]*$/,
	space: /^[^\s]+(\s+[^\s]+)*$/,
	mobile: /^(\+\d{1,3}[- ]?)?\d{10}$/
}

export const error_messages = {
	required: 'This field is required !',
	password: 'Min six, at least one letter, one number and one special character',
	email: 'Please fill the correct email format (e.g. name@email.com)',
	alphaNumeric: 'Alpha-numeric and underscores only',
	space: 'Space before/after text are not allowed',
	mobile: 'Please enter valid mobile number.'
}