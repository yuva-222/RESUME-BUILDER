const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  contactDetails: {
    phone: String,
    address: String,
  },
});

module.exports = mongoose.model('Profile', ProfileSchema);
