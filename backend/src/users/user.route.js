import express from 'express';
import User from './users.model.js';
import jwt from 'jsonwebtoken';


const router = express.Router();

router.post('/admin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Admin not found' });
    }
    if (admin.password !== password) {
      return res.status(401).send({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role }, 
      process.env.JWT_SECRET, 
      {expiresIn: '1h'}
    );

    res.status(201).json({
      message: 'User registered successfully', token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });

  } catch (error) {
    console.error('Failed to login as admin', error);
    return res.status(401).json({ message: 'Failed to login as admin' });
  }
});

export default router;

