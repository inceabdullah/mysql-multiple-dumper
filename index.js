const mysqldump = require('mysqldump');
const getTimes = require('date-assistant');

const DBcredentials = require('./DBcredentials.json');

const times = getTimes();
const exportTime = times.fullTime.twoDigit.YY_MM_DD_HH_mm;

DBcredentials.forEach(credential => {
    const DBname = credential.database;

    mysqldump({
        connection: credential,
        dumpToFile: `./back-ups/${DBname}-${exportTime}.sql`,
    });
});