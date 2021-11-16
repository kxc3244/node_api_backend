const axios = require("axios")

exports.publicAPI = async (req, res) => {
    const response = await axios.get("https://api.publicapis.org/entries?category=animals")
    res.status(200).send(response.data);
  };