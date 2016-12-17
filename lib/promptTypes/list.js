var config = require('config');

function list(field, name, mandatory) {
	var list = {
	    type: 'list',
	    name: field,
	    message: `${name}?`,
	    choices: config.get(`config.${field}`),
	}

	var validate = (answer)  => {
      if (answer.length < 1) {
        return 'Debe elegir al menos una opcion.';
      }
      return true;
    }

	mandatory ? list.validate = validate : null;

	return list;
}

module.exports = list;
