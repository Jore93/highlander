import app from './App';

require('dotenv').config();

const port = process.env.PORT || 8080

app.listen(port, () => {
  return console.log(`Server is listening on port ${port}`);
});
