function inputText(field, name, mandatory, filter) {
	var inputText = {
	    type: 'input',
	    name: field,
	    message: `${name}?`,
	}

	var validate = (answer) => {
      if (answer.length < 1) {
        return 'Debe completar el campo con un numero.';
      }

      return true;
    }

	mandatory ? inputText.validate = validate : null;
	filter ? inputText.filter = (answer) => answer.replace(/["'\.\.-]/gi, '').replace(/[\s]/gi, '-') : null;

	return inputText;
}

module.exports = inputText;
