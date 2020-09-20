const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Tutor = require('../models/Tutor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

      jwt.sign(payload, process.env.TOKEN_SECRET, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      // console.error(error);
      res.status(500).send('Server error');
    }
  }
);

router.post(
  '/send',
  [
    body('name').not().isEmpty().withMessage('Please enter your name'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('message')
      .not()
      .isEmpty()
      .withMessage(
        'Please give us a detailed description of how we can help you. You may also click the "Book Appointmnet" below'
      ),
  ],
  async (req, res) => {
    console.log(req.body);
    try {
      const errors = validationResult(req);
      console.log(errors);

      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

      const msg = {
        to: 'danem7@gmail.com',
        from: process.env.ETHEREAL_EMAIL,
        subject: 'Consultation Request',
        text: `Hello Michael,\n\nYou have received a consultation request from ${req.body.name}.\nHe/she has left you the following message:\n\n${req.body.message}\n\nYou may reach him/her at ${req.body.email}
      `,
      };

      await sgMail.send(msg);
      res.json({
        msg: `Thank you, ${req.body.name}!\n\nYour request has been received. We will contact you within 48 hours!`,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
