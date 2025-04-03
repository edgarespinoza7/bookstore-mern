import express from 'express';
import User from './users.model.js';

const router = express.Router();

router.post('/admin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    console.log(admin);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Failed to login as admin', error);
    return res.status(401).json({ message: 'Failed to login as admin' });
  }
});

export default router;

