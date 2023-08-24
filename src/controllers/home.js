module.exports = {
  async index(req, res) {
    res.json({
      message: "Server Started!",
      method: req.method,
      url: req.url,
      body: req.body,
      ip: req.ip,
      hostname: req.hostname,
    });
  },
};
