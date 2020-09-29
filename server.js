// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.route('/INST377-Assign1-Gr35')
  .get((req, res) => {
    console.log('GET request detected');
    // res.send("Hello World");
  })
  .post((req, res) => {
    console.log('POST request detected');
    console.log('Form data in req.body', req.body);
    res.send("Hello World");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});