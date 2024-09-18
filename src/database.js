
const mongoose = require("mongoose");
const uri = 'mongodb://127.0.0.1:27017/companydb';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('DB is connected'))
.catch(err => console.log(err));
