//Defaults options
module.exports = {
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
    "commonSeparator": "-",
    "prefixSeparator": "/",
    "numberSeparator": "-",
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
};
