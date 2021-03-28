const express = require('express');
const app = express();
const mailer = require('./routes/index');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

/* API endpoint  */
app.use('/api', mailer);

/* handle callback for any request that doesn't match one above */
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

let port_number = process.env.PORT || 4000;

app.listen(port_number, () => {
  console.log(`Servidor escuchando en el puerto 4000`);
});
