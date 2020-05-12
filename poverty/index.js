const census = require('citysdk');

census({
    "sourcePath" : ["acs","acs1"],  // source (survey, ACS 1-year estimate)
    "vintage" : 2017,               // source (year, 2017)
    "values" : ["NAME", "B00001_001E"],     // metric (column for population count)
    "geoHierarchy" : {              // geographic entity (grouped by state)
      "state" : "*"
    }
}, (err, resp) => {
    err ? console.log(err) : console.log(resp);
}
)
