import app from './App';

const port = process.env.PORT || 8080

app.listen(port, (err: string) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server is listening on port ${port}`);
});
