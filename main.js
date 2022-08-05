let fs = require('fs');
const { parse } = require('csv-parse/sync');
const json2csvparse = require('json2csv');

cids_filename = 'nyc_cid_list.csv'

const cid_array = parse(fs.readFileSync(cids_filename, {encoding:'utf8', flag:'r'}), {columns: true, cast: true});


console.log(cid_array)
