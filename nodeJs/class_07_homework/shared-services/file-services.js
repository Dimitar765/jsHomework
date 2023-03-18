import fsPromises from "fs/promises";

const writeFile = async (path, data) => {
  await fsPromises.writeFile(path, data);
};

const readFile = async (path) => {
  return await fsPromises.readFile(path, "utf-8");
};

const appendFile = async (path, data) => {
  await fsPromises.appendFile(path, data);
};

export default {
  writeFile,
  readFile,
  appendFile,
};
