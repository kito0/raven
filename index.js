const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));

app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '');
// 	res.setHeader('Access-Control-Allow-Headers', '');
// 	next();
// });

app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);
