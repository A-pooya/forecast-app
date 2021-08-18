const express = require('express');
const forecastRoutes = require('./routes/forecastRoutes');
const {setHeaders} = require('./middlewares/CORS');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(setHeaders);

//*Routes
app.use(forecastRoutes);

app.listen(3001 , console.log(`server is runnig on port ${3001}`));
