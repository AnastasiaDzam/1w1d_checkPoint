const fs = require('fs')
const {EOL} = require('os')

function getPadawanNames (){
const filePath = ('./data/padawans.txt');
const readFile = fs.readFileSync(filePath, 'utf-8');
return readFile.split(EOL).slice(0, -1);
}

function getLightsaberScores (){
  const filePath = ('data/scores.txt');
  const readFile = fs.readFileSync(filePath, 'utf-8').split(EOL);
  return readFile.map( el => Number(el));
  }

  function getStats() {
    const names = getPadawanNames();
    const dates = getLightsaberScores();
    const result = [];
    for (let i = 0; i < names.length; i += 1) {
      result.push([names[i], dates[i]]);
    }
    return result;
  }

    function writeStats() {
      const result = getStats();
      const filePath = ('data/stats.txt');
      const firstResults = result.map((el) => el.join(" "));
      const finalResults = firstResults.join("\n");
      fs.writeFileSync(filePath, finalResults);
    }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
