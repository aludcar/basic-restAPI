const { response, request } = require("express");

const userGet = (req = request, res = response) => {
    //get params from url
    const params = req.params;
  res.json({
    msg: `Get API - Controller`,
  });
};

const userPost = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: `Post API - Controller`,
    name,
    age,
  });
};
const userPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: `Put API - Controller -> ${id}`,
  });
};
const userDelete = (req, res = response) => {
  res.json({
    msg: `Delete API - Controller`,
  });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
