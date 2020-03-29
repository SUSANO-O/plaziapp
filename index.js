require('dotenv').config()
const app = require('./server')
require('./database')


app.listen(app.get('port'), () =>{
  console.log('server on port 3000')
})
// const app = require('./server')
// const port = 3000

// const MongoClient = require('mongodb').MongoClient

// // Connection URL
// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

// app.get('/', (req, res) => {
//   MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
//     if (err) {
//       res.status(500).send('💥 BOOM  error 💥: ' + err);
//     } else {
//       res.send('Me conecté a la DB! 😎 probando docker');
//       db.close();
//     }
//   });
// });

// app.listen(port, () => console.log(`servidor  on port ${port}!`))
