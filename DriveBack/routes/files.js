const express = require("express");
const router = express.Router();
const utils = require("../utils/dbUtils");

router.get("/:username", async function (req, res) {
  const username = req.params.username;
  const data = await utils.getAllUsersFiles(username);
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("user not found");
  }
});

router.get("/:username/*", async function (req, res) {
  const data = await utils.getAllDirectoryFiles(req.url);
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("directory not found");
  }
});

router.put("/:username/*", async function (req, res) {
  const data = await utils.changeResourceName(req.url, req.body.name);
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("directory not found");
  }
});

router.delete("/:username/*", async function (req, res) {
  console.log(req.url);
  const data = await utils.deleteResource(req.url);
  if (data) {
    res.send({});
  } else {
    res.status(404).send("error deleting resource");
  }
});

router.post("/:username*/newDir", async function (req, res) {
  const name = req.body.name;
  const pathToDir = req.url
    .split("/")
    .slice(0, req.url.split("/").length - 1)
    .join("/");
  const data = await utils.createDir(pathToDir, name);
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("Unable To Create a new directory");
  }
});

module.exports = router;
