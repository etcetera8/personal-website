const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const app = express();
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disabledDotRule: true,
  verbose: true
}))
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

const server = app.listen(process.env.PORT || 5000, function () {
  const port = server.address().port;
  console.log("App now running on the port", port);
});
