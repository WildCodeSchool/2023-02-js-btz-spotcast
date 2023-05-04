const database = require('./databaseConfig');
const axios = require('axios');

//Function to get all tides
const selectAllTides = async (req, res) => {
  // Set the date at Day-1
  const dateMin = new Date();
  dateMin.setDate(dateMin.getDay() - 1);
  // Set the date at Day+8
  const dateMax = new Date();
  dateMax.setDate(dateMax.getDay() + 8);

  // Verify that DB has data on tide from D-1 to D+8 then send it to the tide State
  const [tide] = await database.query('SELECT * FROM tide WHERE time >= ? ', [
    dateMin.toISOString(),
  ]);
  if (tide.length && tide[tide.length - 1].time >= dateMax.toISOString())
    return res.status(200).json(tide);

  // if DB has not the data then we fetch the date from the external API and insert it onto our DB
  const {
    data: { data },
  } = await axios.get(
    `https://api.stormglass.io/v2/tide/extremes/point?lat=43.481&lng=-1.562`,
    {
      headers: {
        Authorization:
          '492f25ae-e4d0-11ed-8d52-0242ac130002-492f2662-e4d0-11ed-8d52-0242ac130002',
      },
    }
  );

  // insert data into DB table if not existing (condition duplicata)
  const newTideData = data.filter(
    (el) => !tide.length || el.time > tide[tide.length - 1].time
  );

  //Format the array elements as a string shaped like (?,?,?) to create DB query;
  const newTideQuery = newTideData.map((el) => '(?,?,?)').join(',');

  await database.query(
    'INSERT into tide (height, time, type) VALUES ' + newTideQuery,

    // Reduce the output by selecting only the value of the object keys
    newTideData.reduce((acc, cur) => {
      return [...acc, ...Object.values(cur)];
    }, [])
  );

  res.send(data);
};

module.exports = {
  selectAllTides,
};
