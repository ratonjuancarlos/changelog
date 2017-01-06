### Options | Defaults

* **branch** : The name of the branch. Defaults to ` `
* **repo_url** : The url of the project. For issues and commits links. Defaults to `git config --get remote.origin.url`
* **version_name**: The version name of the project.
* **file**: The name of the file that will be generated. Defaults to `CHANGELOG.md`,
* **template**: The template for generating the changelog. It defaults to the one inside this project (/templates/template.md)
* **app_name** : The name of the project. Defaults to `My App - Changelog`
* **intro** : The introduction text on the header of the changelog. Defaults to `null`
* **logo** : A logo URL to be included in the header of the changelog. Defaults to `null`
* **changelogrc** : Relative path indicating the location of the .changelogrc file, defaults to current dir.
* **tag**: You can select from which tag to generate the log, it defaults to the last one. Set it to false for log since the beginning of the project
* **debug**: Debug mode, false by default
* **sections**: Group the commit by sections. The sections included by default are the ones that are on the previous example of .changelogrc file.


### Command Line
Install it globally

```
npm install -g brancha
```
See commands
```
brancha -h
```

Use it directly with the common options
```
  Usage: brancha [options] <string>

  Options:

    -h, --help                     output usage information
    -V, --version                  output the version number
    -c, --create                   Create a new branch from origin/develop
    -r, --rename                   Rename current branch
    -d, --delete <string>          Delete branch <string>
    -s, --search <string>          Search <string> in local branches
    -b, --branches                 Show local branches
    -D, --delete-bulk <pattern>    Bulk delete branches with pattern
    -z, --create-commit [message]  Create commit with [message] or create commit with RANDOM message

```

For example:

```
brancha -s mast
```
