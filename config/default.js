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
                "name": "ECT",
                "value": "ECT"
            },{
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







