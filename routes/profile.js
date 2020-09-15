const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Profile = require('../models/Profile');
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
    }).populate('tutor', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found for this tutor' });
    }
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post(
  '/',
  auth,
  [
    body('school')
      .isLength({ min: 3 })
      .withMessage('University must be at least 3 characters'),
    body('degree').not().isEmpty().withMessage('Please enter your degree'),
    body('subjects')
      .not()
      .isEmpty()
      .withMessage('Must have at least two subjects'),
    // body('bio')
    //   .isLength({ min: 150 })
    //   .withMessage('Biography must be at least 150 characters'),
    body('imageUrl').isURL().withMessage('URL not valid'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        school,
        degree,
        subjects,
        bio,
        online,
        person,
        honors,
        imageUrl,
      } = req.body;
      const tutor = req.tutor.id;

      const profile = new Profile({
        tutor,
        education: {
          school,
          degree,
        },
        subjects: subjects.split(' '),
        bio,
        services: {
          online,
          inPerson: person,
          honors,
        },
        img: imageUrl,
      });

      console.log(profile);

      await profile.save();
      res.json(profile);
    } catch (error) {
      res.status(500).send('Server error');
    }
  }
);

router.put(
  '/',
  auth,
  [
    body('school')
      .isLength({ min: 3 })
      .withMessage('University must be at least 3 characters'),
    body('degree').not().isEmpty().withMessage('Please enter your degree'),
    body('subjects')
      .not()
      .isEmpty()
      .withMessage('Must have at least two subjects'),
    // body('bio')
    //   .isLength({ min: 150 })
    //   .withMessage('Biography must be at least 150 characters'),
    body('imageUrl').isURL().withMessage('URL not valid'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

      const {
        school,
        degree,
        subjects,
        bio,
        imageUrl,
        online,
        person,
        honors,
      } = req.body;

      const body = {
        education: {
          school,
          degree,
        },
        subjects: subjects.split(' '),
        bio,
        services: {
          online,
          inPerson: person,
          honors,
        },
        img: imageUrl,
      };

      const profile = await Profile.findOneAndUpdate(
        { tutor: req.tutor.id },
        body
      );

      await profile.save();
      res.json(profile);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
