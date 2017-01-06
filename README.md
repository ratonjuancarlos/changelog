[![NPM Version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Test Coverage][coverage-badge]][codeclimate-url]
[![Code Climate][codeclimate-badge]][codeclimate-url]

> A git changelog based on ANGULAR JS commit standards (but adaptable to your needs). [NPM page][npm-url]

**Works as a `CLI` option or `grunt` plugin**

[Example output](https://github.com/rafinskipg/git-changelog/blob/master/EXTENDEDCHANGELOG.md)

----

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [`.changelogrc` specification](#changelogrc-specification)
- [Command Line](#command-line)
- [Git Commit Guidelines - Source : "Angular JS"](#git-commit-guidelines---source--angular-js)
  - [Commit Message Format](#commit-message-format)
  - [Example types](#example-types)
  - [Scope](#scope)
  - [Subject](#subject)
  - [Body](#body)
  - [Footer](#footer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## `.changelogrc` specification

The `.changelogrc` file contains the "standard commit guideliness" that you and your team are following.

This specification is used to grep the commits on your log, it contains a valid JSON that will tell git-changelog which sections to include on the changelog. 

```javascript
//Defaults options
module.exports = {
    app_name: 'Git Changelog',
    intro: 'Git changelog is a utility tool for generating branches and creating changelogs. It is free and opensource. And based on https://github.com/rafinskipg/git-changelog :)',
    branch: '',
    repo_url: '',
    version: 'v1.0.0',
    config: {
        project: 'Intelligize',
        brancha: {
            createBranchFrom: {
                remote: 'origin',
                branch: 'develop'
            }
        },
        branch: {
            "prefixSynonymous": [
                "festure",
                "enhacement",
                "enhancemet",
                "enhancemen"
            ],
            "prefix": [{
                "order": "0",
                "value": "fix",
                "prefix": "fix",
                "name": "Bug Fix"
            }, {
                "order": "0",
                "value": "feature",
                "prefix": "feature",
                "name": "Feature"
            }, {
                "order": "0",
                "value": "ci",
                "prefix": "ci",
                "name": "CI"
            }, {
                "order": "0",
                "value": "enhancement",
                "prefix": "enhancement",
                "name": "Enhancement"
            }, {
                "order": "0",
                "value": "feat",
                "prefix": "feat",
                "name": "Feat"
            }, {
                "order": "0",
                "value": "docs",
                "prefix": "docs",
                "name": "Documentation"
            }, {
                "order": "0",
                "value": "BREAKING",
                "prefix": "BREAKING",
                "name": "Breaking changes"
            }, {
                "order": "0",
                "value": "refactor",
                "prefix": "refactor",
                "name": "Refactor"
            }, {
                "order": "0",
                "value": "style",
                "prefix": "style",
                "name": "Style"
            }, {
                "order": "0",
                "value": "test",
                "prefix": "test",
                "name": "Test"
            }, {
                "order": "0",
                "value": "chore",
                "prefix": "chore",
                "name": "Chore"
            }, {
                "order": "0",
                "value": "Merge branch",
                "prefix": "Merge branch",
                "name": "Branchs merged"
            }, {
                "order": "0",
                "value": "Merge pull request",
                "prefix": "Merge pull request",
                "name": "Pull requests merged"
            }],
            "project": [{
                "name": "V5X",
                "value": "V5X"
            }, {
                "name": "EO",
                "value": "EO"
            }]
        },
        commit: {
            urlBugs: {
                url: 'https://intelligize-scrum.atlassian.net/browse/',
                name: 'Jira'
            },
            urlCommit: {
                url: 'https://bitbucket.org/intelligize/intelligize.ui/commits/',
                name: 'Bitbucket'
            },
            environments: {
                env: 'develop',
                name: 'develop'
            },
            mergedTo: ['develop'],
            removeFromCommit: [
                'Merged in ',
                'Merge branch ',
                ' into develop'
            ],
        },
        file: {
            fileName: 'changelog',
            fileType: [
                'html',
                'md',
                'pdf'
            ],
            orderBy: '',
            groupBy: '',
            header: 'Changelog for ',
            templateBranchName: [
                'prefix',
                'prefixSeparator',
                'project',
                'commonSeparator',
                'issue',
                'commonSeparator',
                'description'
            ],
            commonSeparator: '-',
            prefixSeparator: '/',
            numberSeparator: '-',
            templateBranchCreate: [{
                name: 'prefix',
                type: 'list',
                mandatory: true,
                text: 'Prefix'
            }, {
                name: 'prefixSeparator',
                type: 'separator'
            }, {
                name: 'project',
                type: 'list',
                mandatory: true,
                text: 'Project'
            }, {
                name: 'commonSeparator',
                type: 'separator'
            }, {
                name: 'issue',
                type: 'inputNumber',
                mandatory: true,
                text: 'Issue Number'
            }, {
                name: 'commonSeparator',
                type: 'separator'
            }, {
                name: 'description',
                type: 'inputBranchName',
                mandatory: true,
                text: 'Description',
                filter: true
            }]
        },
        log: {
            logFormat: [
                'date',
                'commit',
                'abbreviated_commit',
                'subject',
                'sanitized_subject_line',
                'author_name',
                'author_date',
                'commiter_name',
                'commiter_date'
            ],
            logDateFormat: '%d-%m-%Y',
            logSince: '2.months',
            logGrep: [
                'into develop',
                'Merged in',
                'Merged '
            ]
        },
        logOptions: {
            "date": "%ad",
            "commit": "%H",
            "abbreviated_commit": "%h",
            "tree": "%T",
            "abbreviated_tree": "%t",
            "parent": "%P",
            "abbreviated_parent": "%p",
            "refs": "%D",
            "subject": "%s",
            "sanitized_subject_line": "%f",
            "commit_notes": "%N",
            "verification_flag": "%G ? ",
            "signer": "%GS",
            "signer_key": "%GK",
            "author_name": "%aN",
            "author_email": "%aE",
            "author_date": "%aD",
            "commiter_name": "%cN",
            "commiter_email": "%cE",
            "commiter_date": "%cD"
        },
        randomCommit: [
            'tu vieja en brancha',
            'yaastinnnnnnnn',
            'wiiiiiipu',
            'jamaaaas'
        ],
    }
}

```

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


## Git Commit Guidelines - Source : "Angular JS"

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the AngularJS change log**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on github as well as in various git tools.

Example commit messages

```
git commit -m "docs(readme): Add documentation for explaining the commit message"
git commit -m "refactor: Change other things"
```

Closing issues : 

```
git commit -m "fix(git_changelog_generate): pass tag if it exists to gitReadLog
Previously if a tag was found the script would try to find commits
between undefined..HEAD. By passing the tag, it now finds tags between
tag..HEAD.

Closes #5."
```

### Example types

**You may define your own types refering to the `.changelogrc` specification**

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation


### Scope
The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

###Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes"
The body should include the motivation for the change and contrast this with previous behavior.

###Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.


A detailed explanation can be found in this [document][commit-message-format].
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#



[npm-badge]: https://badge.fury.io/js/git-changelog.svg
[npm-url]: https://www.npmjs.com/package/brancha

[travis-badge]: https://travis-ci.org/rafinskipg/git-changelog.svg
[travis-url]: https://travis-ci.org/rafinskipg/git-changelog

[codeclimate-badge]: https://codeclimate.com/github/rafinskipg/git-changelog/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/rafinskipg/git-changelog

[coverage-badge]: https://codeclimate.com/github/rafinskipg/git-changelog/badges/coverage.svg

[Rafinskipg]: https://github.com/rafinskipg
[JohnnyEstilles]: https://github.com/JohnnyEstilles

[jodybrewster]: https://github.com/jodybrewster
[colegleason]: https://github.com/colegleason

[npm-versioning]: https://docs.npmjs.com/cli/version
[changelog_specification]: https://github.com/rafinskipg/git-changelog/#changelog-specification
[npm-versioning]: https://docs.npmjs.com/cli/version