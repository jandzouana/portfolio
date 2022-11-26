const express = require('express');
const path = require('path');
// const cors = require('cors');
const fs = require('fs');
const https = require('https');
const app = express();
const PORT = 3015;
// const expressStaticGzip = require('express-static-gzip');

// Cross-Origin-Opener-Policy: same-origin Cross-Origin-Embedder-Policy: require-corp
app.use((req, res, next) => {
    res.set('Cross-Origin-Opener-Policy', 'same-origin');
    res.append('Cross-Origin-Embedder-Policy', 'require-corp');

    // // THIS IS THE LINE THAT CHANGE EVERYTHING
    // res.append('Cross-Origin-Embedder-Policy', 'require-corp');
    // res.set('Access-Control-Allow-Origin', '*');
    // // THIS MAKES A DIFFERENCE for some reason
    // res.append('Cross-Origin-Embedder-Policy', 'require-corp');
    // res.append('Vary', 'Accept-Encoding');
    next();
});

app.get('/', (req, res) => {
    console.log('sending index.html...');
    // res.sendFile(path.join(__dirname, '../index_mobile_tailwind.html'));
    res.sendFile(path.join(__dirname, '../../index.html'));
});

// express.static should always be at the BOTTOM.
// if you put this above our .get('/') eendpoints, it'll
// execute first and never run the endpoint.... keep it as a fallback and
// leave at the bottom of your endpoint routes!
// app.use(express.static(path.join(__dirname, '../')));
// app.use(expressStaticGzip(path.join(__dirname, '../')));

// THIS WILL ONLY SHOW UP IF YOU WRITE HTTPS IN YOUR SERVER
const httpsServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname,'server.key')),
    cert: fs.readFileSync(path.join(__dirname,'server.cert'))
}, app)

httpsServer.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
    let url = `https://localhost:${PORT}`;

    let start =
        process.platform == "darwin"
            ? "open"
            : process.platform == "win32"
                ? "start"
                : "xdg-open";
    require("child_process").exec(start + " " + url);
    console.log("App now running on port", PORT);
});


// remember if changing back to HTTPS to change it as well in mainuicontroller.js
// app.listen(PORT, () => {
//     console.log(`LISTENING ON PORT ${PORT}`);
// });
