function list(field, name, mandatory) {
	let list = {
	    type: 'list',
	    name: field,
	    message: `${name}?`,
	    choices: config.get(`config.${field}`),
	}

	const validate = function (answer) {
      if (answer.length < 1) {
        return 'Debe elegir al menos una opcion.';
      }
      return true;
    }

	mandatory ? list.validate = validate;

	return list;
}

module.exports = list;
