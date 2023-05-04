const database = require('./databaseConfig');
const axios = require('axios');

const TideDatas = [
  {
    height: -0.6951397894703106,
    time: '2023-04-27T02:03:00+00:00',
    type: 'low',
  },
  {
    height: 0.4560770426964021,
    time: '2023-04-27T08:24:00+00:00',
    type: 'high',
  },
  {
    height: -0.5003427149643407,
    time: '2023-04-27T14:21:00+00:00',
    type: 'low',
  },
  {
    height: 0.6030197313726757,
    time: '2023-04-27T20:56:00+00:00',
    type: 'high',
  },
  {
    height: -0.5750727015483376,
    time: '2023-04-28T03:28:00+00:00',
    type: 'low',
  },
  {
    height: 0.3995877551242951,
    time: '2023-04-28T10:08:00+00:00',
    type: 'high',
  },
  {
    height: -0.43994778892794667,
    time: '2023-04-28T15:55:00+00:00',
    type: 'low',
  },
  {
    height: 0.607201103646608,
    time: '2023-04-28T22:36:00+00:00',
    type: 'high',
  },
  {
    height: -0.6390564209155577,
    time: '2023-04-29T05:00:00+00:00',
    type: 'low',
  },
  {
    height: 0.5285952395509613,
    time: '2023-04-29T11:33:00+00:00',
    type: 'high',
  },
  {
    height: -0.5641654743811426,
    time: '2023-04-29T17:23:00+00:00',
    type: 'low',
  },
  {
    height: 0.7574488132588835,
    time: '2023-04-29T23:49:00+00:00',
    type: 'high',
  },
  {
    height: -0.8257758348023374,
    time: '2023-04-30T06:05:00+00:00',
    type: 'low',
  },
  {
    height: 0.7408185266854058,
    time: '2023-04-30T12:28:00+00:00',
    type: 'high',
  },
  {
    height: -0.7828236030372122,
    time: '2023-04-30T18:21:00+00:00',
    type: 'low',
  },
  {
    height: 0.9618980070325651,
    time: '2023-05-01T00:39:00+00:00',
    type: 'high',
  },
  {
    height: -1.0468196926721989,
    time: '2023-05-01T06:50:00+00:00',
    type: 'low',
  },
  {
    height: 0.9704387158928522,
    time: '2023-05-01T13:08:00+00:00',
    type: 'high',
  },
  {
    height: -1.0212621022701909,
    time: '2023-05-01T19:04:00+00:00',
    type: 'low',
  },
  {
    height: 1.1723938535485017,
    time: '2023-05-02T01:19:00+00:00',
    type: 'high',
  },
  {
    height: -1.2623229740567186,
    time: '2023-05-02T07:27:00+00:00',
    type: 'low',
  },
  {
    height: 1.1899200362152735,
    time: '2023-05-02T13:43:00+00:00',
    type: 'high',
  },
  {
    height: -1.249074387139316,
    time: '2023-05-02T19:41:00+00:00',
    type: 'low',
  },
  {
    height: 1.366752829695694,
    time: '2023-05-03T01:54:00+00:00',
    type: 'high',
  },
  {
    height: -1.4530499118639228,
    time: '2023-05-03T08:00:00+00:00',
    type: 'low',
  },
  {
    height: 1.3847643912574492,
    time: '2023-05-03T14:14:00+00:00',
    type: 'high',
  },
  {
    height: -1.4518835749105223,
    time: '2023-05-03T20:14:00+00:00',
    type: 'low',
  },
  {
    height: 1.5307870777608803,
    time: '2023-05-04T02:27:00+00:00',
    type: 'high',
  },
  {
    height: -1.6063766113017697,
    time: '2023-05-04T08:32:00+00:00',
    type: 'low',
  },
  {
    height: 1.5452585896007853,
    time: '2023-05-04T14:45:00+00:00',
    type: 'high',
  },
  {
    height: -1.6196043919680523,
    time: '2023-05-04T20:47:00+00:00',
    type: 'low',
  },
  {
    height: 1.6521096135554254,
    time: '2023-05-05T03:00:00+00:00',
    type: 'high',
  },
  {
    height: -1.7120594883882554,
    time: '2023-05-05T09:05:00+00:00',
    type: 'low',
  },
  {
    height: 1.6632441783378613,
    time: '2023-05-05T15:17:00+00:00',
    type: 'high',
  },
  {
    height: -1.7418875580110234,
    time: '2023-05-05T21:21:00+00:00',
    type: 'low',
  },
  {
    height: 1.7185741363303402,
    time: '2023-05-06T03:33:00+00:00',
    type: 'high',
  },
  {
    height: -1.7610143651143784,
    time: '2023-05-06T09:38:00+00:00',
    type: 'low',
  },
  {
    height: 1.7305219591136736,
    time: '2023-05-06T15:50:00+00:00',
    type: 'high',
  },
  {
    height: -1.8072012680407776,
    time: '2023-05-06T21:56:00+00:00',
    type: 'low',
  },
];

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
