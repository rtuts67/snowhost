const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

var pg = require('pg')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432'

app.get('/snowhostdb2', function(req, res) {
  const client = new pg.Client(connectionString);
  client.connect(function(err) {
    if(err) {
      console.error('Trouble connecting to postgres', err)
    }
    client.query(
      'SELECT * FROM register_data',
      function(err, result) {
        if(err) {
          console.error('Query failed', err)
        }
        res.json(result);
        client.end();
      }
    )
  })
})

app.post('/snowhostdb2', bodyParser.json(), function(req, res){
  const client = new pg.Client(connectionString);

  client.connect(function(err){
    if(err) console.error('Trouble connecting to postgres', err)

    client.query(
    'INSERT INTO register_data (name, email, password) VALUES($1, $2, $3)',
    [req.body.name, req.body.email, req.body.password],
    function(err) {
      if(err) console.error('Error running query', err);
      client.end();
    })
  })
  res.send('Post complete')
})

app.get('/', function(req, res) {
  const client = new pg.Client(connectionString)

  client.connect(function(err) {
    if(err) console.error('Trouble connecting to postgres: ', err)

    client.query(
      'CREATE TABLE IF NOT EXISTS register_data (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(80) NOT NULL, password VARCHAR(50))',
      err => {
        if(err) console.error('Could not create the table', err)
        client.end()
      }
    )
  })
  res.sendFile('index.html', {root: '.'})
})


app.use(express.static('./'))

function callBack(request, response) {
  response.sendFile('index.html', {root: '.'});
}

app.get('*', callBack)

app.listen(PORT, () => console.log('Listening on port ' + PORT + ' ' + connectionString));
