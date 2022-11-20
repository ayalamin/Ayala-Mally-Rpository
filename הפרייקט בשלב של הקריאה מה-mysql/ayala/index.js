const express = require('express');
const userRouts = require('./routs/userRouts')
const cityRouts = require('./routs/cityRouts')
const clenerRouts = require('./routs/clenerRouts')
const orderRouts = require('./routs/orderRouts')
const app = express();
const port = 2024;

const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/order', orderRouts);
app.use('/user', userRouts);
app.use('/cleaner', clenerRouts);
app.use('/api/city',cityRouts );
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});