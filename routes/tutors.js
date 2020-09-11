const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @route   POST api/tutors
// @desc     Register tutor
// @access  Public -->No token required to access
router.post(
  '/',
  [
    body('name').not().isEmpty().withMessage('Your name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Must be at least 6 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, password2 } = req.body;

    if (password !== password2) {
      return res.status(400).json({
        errors: [{ msg: 'Passwords did not match. Please try again.' }],
      });
    }

    try {
      const tutor = await Tutor.findOne({ email });
      if (tutor) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Tutor already registered. Please try another email.',
            },
          ],
        });
      }

      const newTutor = new Tutor({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      newTutor.password = await bcrypt.hash(password, salt);

      await newTutor.save();

      const payload = {
        tutor: {
          id: newTutor.id,
        },
      };

      jwt.sign(payload, 'jwtSecret', (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.json({ msg: error.message });
    }
  }
);

module.exports = router;
