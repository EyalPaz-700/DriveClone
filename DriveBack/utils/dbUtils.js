const fs = require("node:fs");
const path = require("path");
const Joi = require("joi");

function checkIfDir(src) {
  return fs
    .lstatSync(path.resolve(__dirname, "../public/") + src)
    .isDirectory();
}

async function getAllUsersFiles(username) {
  try {
    const data = await fs.promises.readdir(
      path.resolve(__dirname, "../public/" + username)
    );
    return data.map((src) => {
      return {
        path: `localhost:3000/public/${username}/${src}`,
        is_dir: checkIfDir("/" + username + "/" + src),
      };
    });
  } catch {
    console.log("error");
    return false;
  }
}

async function getAllDirectoryFiles(pathToDir) {
  try {
    const data = await fs.promises.readdir(
      path.resolve(__dirname, "../public/" + pathToDir)
    );
    return data.map((src) => {
      return {
        path: `localhost:3000/public${pathToDir}/${src}`,
        is_dir: checkIfDir("/" + pathToDir),
      };
    });
  } catch {
    return false;
  }
}

async function changeResourceName(pathToDir, newName) {
  const dirs = pathToDir.split("/");
  let newPath = [...dirs];
  newPath[newPath.length - 1] = newName;
  newPath = newPath.join("/");
  try {
    data = fs.promises.rename(
      path.resolve(__dirname, "../public" + pathToDir),
      path.resolve(__dirname, "../public" + newPath)
    );
    return true;
  } catch {
    return false;
  }
}

async function deleteResource(pathToResource) {
  try {
    if (!checkIfDir(pathToResource)) {
      await fs.promises.unlink(
        path.resolve(__dirname, "../public" + pathToResource)
      );
    } else {
      await fs.promises.rm(
        path.resolve(__dirname, "../public" + pathToResource),
        {
          recursive: true,
        }
      );
    }
    return {};
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function createDir(pathToDir, name) {
  try {
    await fs.promises.mkdir(
      path.resolve(__dirname, "../public" + pathToDir + "/" + name)
    );
    return { name };
  } catch (err) {
    console.log(err);
    return;
  }
}

module.exports = {
  getAllUsersFiles,
  getAllDirectoryFiles,
  changeResourceName,
  deleteResource,
  createDir,
};
