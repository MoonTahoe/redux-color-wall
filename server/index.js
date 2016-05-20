import React from 'react'
import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import fs from 'fs'
import colorsApi from './routes/colors-api'
import cors from 'cors'
import colors from '../data'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from '../components/App'
import storeFactory from '../store'

const initialState = {colors};
const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());
// Adding the API
app.use('/api', colorsApi);

app.use('/', (req, res) => {

  const store = storeFactory(true, initialState);
  const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
      <meta charset="utf-8">
      <title>Redux Color Wall</title>
    </head>
    <body>
      <div id="react-container">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="/assets/bundle.min.js"></script>
    </body>
    </html>
  `);

});



app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
