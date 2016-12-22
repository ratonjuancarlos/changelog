module.exports = {
    urlBugs: [{
        url: 'https://intelligize-scrum.atlassian.net/browse/',
        name: 'Jira'
    }],
    environments: {
        env: 'develop',
        name: 'develop'
    },
    createBranchFrom: {
        remote: 'origin',
        branch: 'develop'
    },
    removeFromCommit: [
        'Merged in ',
        'Merge branch ',
        ' into develop'
    ],
};
