const mongoose = require('mongoose');
// const URI = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} =  process.env;
const MONGODB_URL = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
  .then(db => console.log('database is conect'))
  .catch(err => console.log(err))