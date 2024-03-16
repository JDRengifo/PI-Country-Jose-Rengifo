const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getPostCountry } = require("./src/controllers/getpostCountry.js");

const PORT = 3001;

conn.sync({ force: true}).then(() => {
server.listen(PORT, () => {
  getPostCountry()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
