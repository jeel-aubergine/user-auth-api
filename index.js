const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const users = require('./src/models/users');
const requestValidationMiddleware = require('./src/middleware/requestMiddleware');

const app = express();
const PORT = 3000;

app.use(requestValidationMiddleware);
app.use(bodyParser.json());
app.use('/auth', authRoutes);

users.userModelInitialization().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});