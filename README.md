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
