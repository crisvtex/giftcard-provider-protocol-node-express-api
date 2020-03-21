import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models from './models';
import routes from './routes';

const app = express();


// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

app.use(function(req, res, next){
  if (req.is('text/*')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});


// Routes

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/giftcards', routes.giftcard);
app.use('/getblockedwindows', routes.getBlockedWindows)
app.use('/addBlockedWindows', routes.addBlockedWindows)

// Start

app.listen(process.env.PORT, () =>
  console.log(`Servicio API Backend iniciado en puerto http://localhost:${process.env.PORT}`),
);
