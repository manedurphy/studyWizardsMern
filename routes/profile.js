const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const Tutor = require('../models/Tutor');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const tutors = await Profile.find().populate('tutor', ['name']);

    res.json(tutors);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      tutor: req.tutor.id,
    });

    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found for this tutor' });
    }
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { education, subjects, bio, services, img } = req.body;
    const tutor = req.tutor.id;

    const profile = new Profile({
      tutor,
      education,
      subjects,
      bio,
      services,
      img,
    });

    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.put('/', auth, async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { tutor: req.tutor.id },
      req.body
    );

    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
