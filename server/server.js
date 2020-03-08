const express = require('express');
const dotenv = require('dotenv').config();
const PexelsAPI = require('pexels-api-wrapper');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const pexelsClient = new PexelsAPI(process.env.API_KEY);

const url = 'https://api.pexels.com/v1/curated?per_page=15&page=1';
const headers = {
  Authorization: process.env.API_KEY
};

app.use(express.static(path.join(__dirname, '../app/dist')));

app.use('/title', async (req, res) => {
  try {
    const page = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    const photos = await pexelsClient.search('abstract', 1, page);

    res.status(200).json({
      status: 'success',
      data: photos
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err
    });
  }
});

app.use('/curated', async (req, res) => {
  try {
    const page = req.query.page;

    const photos = await pexelsClient.getCuratedPhotos(22, page);

    res.status(200).json({
      status: 'success',
      data: photos
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err
    });
  }
});

app.use('/search', async (req, res) => {
  try {
    const page = req.query.page;
    const search = req.query.search;
    const photos = await pexelsClient.search(search, 22, page);

    res.status(200).json({
      status: 'success',
      data: photos
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err
    });
  }
});

app.use('/popular', async (req, res) => {
  try {
    const page = req.query.page;
    const search = req.query.search;
    const photos = await pexelsClient.getPopularPhotos(22, page);

    res.status(200).json({
      status: 'success',
      data: photos
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err
    });
  }
});

app.use('/image', async (req, res) => {
  try {
    const id = req.query.id;
    const photo = await pexelsClient.getPhoto(id);

    res.status(200).json({
      status: 'success',
      data: photo
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
