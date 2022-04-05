exports.page = (req, res) => {
    res.send({ ...req.params, ...req.query });
};