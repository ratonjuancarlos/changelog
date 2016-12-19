function inputNumber(field, name, mandatory) {
	var inputNumber = {
	    type: 'input',
	    name: field,
	    message: `${name}?`,
	}

	var validate = (answer) => {
      var regex =  /^[0-9]*$/;
      if (answer.length < 1) {
        return 'Debe completar el campo con un numero.';
      }
      if (answer.match(regex)) {
        return true;
      }

      return 'Debe ser un numero.';
    }

	mandatory ? inputNumber.validate = validate : null;

	return inputNumber;
}

module.exports = inputNumber;
