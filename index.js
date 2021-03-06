// const dotenv = require('dotenv');
// dotenv.config();
const express = require('express');

const projectRouter = require('./data/helpers/projectRouter');
const actionRouter = require('./data/helpers/actionRouter');

const server = express();

server.use(logger);
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
  res.send(`
  <h2>Sing along:</h2>

  <p>
      here's a little code I wrote, you might want to read it really slow, don't worry be happy<br>
    in every line there may be trouble, but if you worry you make it double, don't worry, be happy<br>
    ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy<br>
    your file is getting way too big, bring a Router and make it thin, don't worry, be crafty<br>
    there is no data on that route, just write some code, you'll sort it out… don't worry, just API…<br>
    I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy<br>

    Go code!
  </p>`);
});

// Custom middleware
function logger(req, res, next) {
  let newDate = Date.now(),
    currentDate = new Date(newDate).toDateString(),
    timeStamp = new Date(newDate).toTimeString();
  console.log(
    `${req.method} to http://localhost/5000${
      req.path
    } at ${currentDate} ${timeStamp}`,
  );
  next();
}

const port = 5000;
server.listen(port, () => {
  console.log(`\n *** Server Running on http://localhost:${port} ***\n`);
});

/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/
