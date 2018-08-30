import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import user from './routes/user';
import bovino from './routes/bovino';
import alimentacion from './routes/alimentacion';
import ceba from './routes/ceba';
import finca from './routes/finca';
import leche from './routes/leche';
import manejo from './routes/manejo';
import pajilla from './routes/pajilla';
import produccion from './routes/produccion';
import sanidad from './routes/sanidad';
import vacuna from './routes/vacuna';
import venta from './routes/venta';
import grupo from './routes/grupo';
import cookieParser = require('cookie-parser'); // this module doesn't use the ES6 default export yet
import cors = require('cors');

const app: express.Express = express();


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1', user);
app.use('/api/v1/fincas', finca);
app.use('/api/v1/bovinos', bovino);
app.use('/api/v1/alimentacion', alimentacion);
app.use('/api/v1/sanidad', sanidad);
app.use('/api/v1/manejo', manejo);
app.use('/api/v1/ceba', ceba);
app.use('/api/v1/leche', leche);
app.use('/api/v1/pajilla', pajilla);
app.use('/api/v1/grupos',grupo);
app.use('/api/v1/produccion', produccion);
app.use('/api/v1/vacuna', vacuna);
app.use('/api/v1/venta', venta);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use((error: any, req, res, next) => {
    res.status(error['status'] || 500);
    res.render('error', {
      message: error.message,
      error
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((error: any, req, res, next) => {
  res.status(error['status'] || 500);
  res.render('error', {
    message: error.message,
    error: {}
  });
  return null;
});


export default app;