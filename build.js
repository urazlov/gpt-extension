const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

let jsContent = fs.readFileSync('./popup.js', 'utf-8');

jsContent = jsContent.replace(/__API_KEY__/g, process.env.API_KEY);

new fs.mkdirSync('dist');
fs.writeFileSync('dist/popup.js', jsContent);
