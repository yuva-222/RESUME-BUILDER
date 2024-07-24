const Resume = require('../models/Resume');

exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });
    if (!resume) {
      return res.status(400).json({ msg: 'Resume not found' });
    }
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createOrUpdateResume = async (req, res) => {
  const { sections, template, customization } = req.body;

  const resumeFields = {};
  resumeFields.user = req.user.id;
  if (sections) resumeFields.sections = sections;
  if (template) resumeFields.template = template;
  if (customization) resumeFields.customization = customization;

  try {
    let resume = await Resume.findOne({ user: req.user.id });
    if (resume) {
      resume = await Resume.findOneAndUpdate(
        { user: req.user.id },
        { $set: resumeFields },
        { new: true }
      );
      return res.json(resume);
    }

    resume = new Resume(resumeFields);
    await resume.save();
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
