const app = require('./app');

const port = process.env.PORT || 3333;
console.log(port);
app.listen(port);