const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.DB_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {    
    console.log('connected to MongoDB')  
  })  
  .catch((error) => {    
    console.log('error connecting to MongoDB:', error.message)  
  })

const blogSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  tags: [String],
  title: String,
})
blogSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
});

module.exports = mongoose.model('Posts', blogSchema);