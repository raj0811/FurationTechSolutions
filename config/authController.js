const jwt = require('jsonwebtoken');

exports.isAuthenticatedUser=async(req,res,next)=>{
    const token=req.headers.authorization

    if(!token){
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
        // Check if the token is valid
        if (!decodedToken) {
          return res.status(401).json({ error: 'Invalid token' });
        }
    
        // Store the decoded token in the request object
        req.user = decodedToken;
    
        // Proceed to the next middleware or route handler
        next();
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during authentication' });
      }
    
}