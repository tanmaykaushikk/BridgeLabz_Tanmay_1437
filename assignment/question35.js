function csvToArray(csvText) {
    const rows = csvText.split('\n');

    const array = rows.map(row => row.split(','));
  
    return array;
  }
  
  const csvText = `name,age,city
  Alice,30,New York
  Bob,25,San Francisco
  Charlie,35,Los Angeles`;
  
  const resultArray = csvToArray(csvText);
  console.log(resultArray);

  