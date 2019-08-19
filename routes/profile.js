// Must establish express in order to set route in seperate folder.
const express = require('express');
const router = express.Router();
// node-fetch is used for easy/logical node.js Api request.
const fetch = require('node-fetch');

// Route set for TackerApp.com specifications.
router.get('/:platform/:gamertag', async (req, res) => {
try {
const headers = {
    'TRN-Api-Key': process.env.TRACKER_API_KEY
 };
    // Destructuring 
    const { platform, gamertag } = req.params;

    // Using Node.fetch made request to third part API.
    const response = await fetch(
        `${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
        {
          headers
        }
      );
    
    const data = await response.json();

    // Throw error message if an error occurs.
    if(data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: 'Profile not found'
      });
    }

  // Received data and sent it back to client.
    res.json(data);
} catch (err) {
console.error(err);
res.status(500).json({
    message: 'Server Error'
});
 }
});
    // Gives us response from Trackers main URL.
   
// Must be exported so it can be utilized in other files.
module.exports = router;