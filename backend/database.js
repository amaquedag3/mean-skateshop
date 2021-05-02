const mongoose = require('mongoose');
const URL = 'mongodb://localhost/mean_skateShop';

mongoose.connect(URL, {useNewUrlParser: true,  useUnifiedTopology: true})
    .then(db => console.log('La BD está conectada'))
    .catch(err => console.error(err));
    
module.exports = mongoose;