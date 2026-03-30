import express from 'express';

const PORT =  process.env.PORT || 8000;

const app = express();

const orders = [];

//add get, post, put, patch, delete

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
