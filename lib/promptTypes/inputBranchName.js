var shell = require('shelljs');

function inputBranchName(field, name, mandatory) {
	var inputBranchName = {
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

	mandatory ? inputBranchName.validate = validate : null;

	inputBranchName.filter = (answer) => {
		const branchName = answer.replace(/\s/gi, '-')
		// const branchName = answer.replace(/["'\\\?\*\~\^\(@\.\.)-]/gi, '').replace(/\s/gi, '-')
		if(shell.exec(`git check-ref-format --branch ${branchName}`).stderr !== ''){
			console.log('la descripcion del branch no es valida para un nombre de branch')
			process.exit(1)
		}
		return branchName;
	};

	return inputBranchName;
}

module.exports = inputBranchName;
