const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sections: {
    workExperience: [String],
    education: [String],
    skills: [String],
    achievements: [String],
  },
  template: {
    type: String,
  },
  customization: {
    fonts: String,
    colors: String,
  },
});

module.exports = mongoose.model('Resume', ResumeSchema);
