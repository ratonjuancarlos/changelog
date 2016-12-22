module.exports = {
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
        'Merged in'
    ]
};
