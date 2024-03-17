const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getCreateBdCountry } = require("./src/controllers/getCreateBdCountry.js");

const PORT = 3001;
// console.log(conn)s
conn.sync({ force: false}).then(() => {
server.listen(PORT, () => {
  // getCreateBdCountry() //! FALTA ARREGLAR ESTO
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
