// superbowlWin function that takes an array of objects representing the Super Bowl record and returns the year in which the Denver Broncos won the Super Bowl.
function superbowlWin(record) {
    const winRecord = record.find(entry => entry.result === 'W');
    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined;
    }
  }
