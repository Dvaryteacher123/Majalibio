const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const gameRouter = require('./router');
app.use('/api', gameRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Seva ya Dvary Game inafanya kazi vizuri kwenye port ${PORT}`);
});
