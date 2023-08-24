module.exports = {

  async chat(req, res) {
    res.sendFile(__dirname + '/index.html');
  },
};
