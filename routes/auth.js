const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Tutor = require('../models/Tutor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post(
  '/',
  [
    body('email').not().isEmpty().withMessage('Please enter a valid email'),
    body('password').not().isEmpty().withMessage('Please enter your password'),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const tutor = await Tutor.findOne({ email });
      if (!tutor) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, tutor.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const payload = {
        tutor: {
          id: tutor.id,
        },
      };

      jwt.sign(payload, 'jwtSecret', (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      // console.error(error);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
