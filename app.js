const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.listen(3333, () => {
    console.log('Server running on port 3333');
});


const rootController = require('./routes/index');

app.use('/', rootController);
