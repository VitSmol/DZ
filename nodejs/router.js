const Express = require('express');
const router = Express.Router();

const bodyParser = require('body-parser');
const AWS = require('aws-sdk')

const USERS_TABLE = process.env.USERS_TABLE;
const IS_OFFLINE = process.env.IS_OFFLINE

let dynamoDb;
 
if (IS_OFFLINE === 'true') {
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:3000'
  });
  // console.log(dynamoDb);
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

router.use(bodyParser.json({strict: false}))

router.get('/', function(req, res) {
  res.send('get all')
})

router.get('/users/:userId', (req, res) => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId
    }
  }
  dynamoDb.get(params, (err, result) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ error: 'Could not get user'})
    }
    if (result.Item) {
      const {userId, name} = result.Item;
      res.json({userId, name})
    } else {
      res.status(404).json({ error: 'User not found'})
    }
  });
})

router.post('/users', (req, res) => {

  const { userId, name } = req.body;
  if (typeof userId !== 'string') {
    res.status(400).json({ error: '"userId" must be a string' });
  } else if (typeof name !== 'string') {
    res.status(400).json({ error: '"name" must be a string' });
  }
  console.log(req.body);
  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId, name
    }
  }
  dynamoDb.put(params, (error) => {
    if (error) {
      res.status(400).json({ error: 'Could not create user' });
    }
    res.status(200).json({ userId, name });
  })
})

module.exports = router;