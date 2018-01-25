const express = require('express');
const app = express();

// API routes here
app.get('/api/storytime', (req, res) => {

    const Sentences = [
        {id: 1, Beginning: "I left Home, and then went to the store"},
        {id: 2, Middle: "i found two dogs in the parking lot"},
        {id: 3, End: "Bought all my stuff"},
        {id: 4, Epilog: "And then took the dogs i found home"}
    ];

   

    res.json(Sentences);
});



const port = 5000;
app.listen(port, () => `Server running on port ${port}`);