import express from 'express';
import path from 'path';
import errorhandler from 'errorhandler';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(require('morgan')('dev'));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(require('./routes'));

if (!isProduction) {
  app.use(errorhandler());
}

if (!isProduction) {
  app.use((err, req, res) => {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${server.address().port}`);
});