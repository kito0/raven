const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		max: 64,
	},
	body: {
		type: String,
		required: true,
	},
	image: {
		type: Buffer,
	},
	imageType: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

postSchema.virtual('imagePath').get(function () {
	if (this.image != null && this.imageType != null) {
		return `data:${this.imageType};charset=utf-8;base64,${this.image.toString(
			'base64'
		)}`;
	}
});

module.exports = mongoose.model('Post', postSchema);
