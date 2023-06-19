const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User= require('../models/user')

module.exports.signup=async(req,res)=>{
    try{
        const { email, password, name }=req.body

        // Check if user with the same email already exists
        console.log(email,password,name);
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
          }

        const user = new User({ email, password, name });
        await user.save();

        const token = jwt.sign({ userId: user._id }, 'your_secret_key');
        res.json({ token, user });

    }catch(error){
        res.send(error)
    }
}


module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user with the provided email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'your_secret_key');
  
      // Send the token and user data in the response
      res.json({ token, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  };