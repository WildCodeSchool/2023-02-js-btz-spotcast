const database = require('./databaseConfig');

// login() => password,email -> select from u where
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const [userLog] = await database.query(
    'SELECT * FROM users WHERE email = ? AND password=?',
    [email, password]
  );
  return res.json(userLog[0]);
};

module.exports = {
  loginUser,
};
