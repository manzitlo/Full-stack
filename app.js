// Requiring the module
const express = require('express');
const app = express();
const routeModule = require('./routes/routeModule');
const mongoose = require('mongoose');

// parse application/json, basically parse incoming Request Object as a JSON Object
app.use(express.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(express.urlencoded({ extended: false }));

// Route handling
app.get('/', (req, res) => {
  res.send('<h2>Hello from Express.js server!!</h2>');
});

//Add routers
app.use('/api/v1/', routeModule);

mongoose
  .connect(
    'mongodb+srv://max:meetfoodclass@cluster0.zepyq.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'seefood-database',
    }
  )
  .then(() => {
    console.log('Database Connection is ready...');
    app.listen(8080);
    console.log('server listening on port 8080');
  })
  .catch((err) => {
    console.log(err);
  });



// await User.populate(user, {
//   path: 'likedVideos.videoPost.businessId',
//   select: [
//     '_id',
//     'businessName',
//     'businessLogo',
//     'businessType',
//     'businessUrl',
//     'canDelivery',
//     'canPickup',
//   ],
// });
