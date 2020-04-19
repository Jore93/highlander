import app from './App';
import {logLine} from './helpers';

require('dotenv').config();

const port = process.env.PORT || 8080

app.listen(port, () => {
  return logLine(`Server is listening on port ${port}`);
});
