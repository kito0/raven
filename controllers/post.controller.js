exports.getData = async (req, res) => {
	res.send(req.user);
};
