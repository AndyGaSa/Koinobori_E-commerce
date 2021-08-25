const axios = require('axios');

async function loadIndex(req, res) {
  try {
    const { data } = await axios.get('http://localhost:5000/user/612145df989eed36ec1f04a2');
    res.render('index', { user: data });
  } catch (error) {
    res.status(500);
    res.send('There was an error. Could not load index');
  }
}

module.exports = loadIndex;
