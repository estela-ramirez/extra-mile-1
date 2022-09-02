const express = require('express');
const app = express();

const path = require ('path');

app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user4"]});
})
// so server can parse through incoming json & limit amount per request
app.use(express.json({limit: '1mb'}));  

const PORT = process.env.PORT || 5000; // backend routing port

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname + '/build')));
    
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});