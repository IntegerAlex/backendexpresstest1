import express from './express';
const app = express();
const port = 5500;
app.get('/', (req, res) => {
  res.send('Welcome to the login page');
});
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

app.use(express.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Perform validation here (replace with your validation logic)
    if (username === 'yourUsername' && password === 'yourPassword') {
      res.send('Login successful');
    } else {
      res.send('Login failed');
    }
  });
  
  
  // Start the server
  


