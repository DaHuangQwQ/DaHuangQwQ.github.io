import {
  __commonJS
} from "./chunk-Y2F7D3TJ.js";

// browser-external:fs
var require_fs = __commonJS({
  "browser-external:fs"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs" has been externalized for browser compatibility. Cannot access "fs.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/directory-tree/lib/directory-tree.js
var require_directory_tree = __commonJS({
  "node_modules/directory-tree/lib/directory-tree.js"(exports, module) {
    var FS = require_fs();
    var PATH = require_path();
    var constants = {
      DIRECTORY: "directory",
      FILE: "file"
    };
    function safeReadDirSync(path) {
      let dirData = {};
      try {
        dirData = FS.readdirSync(path);
      } catch (ex) {
        if (ex.code == "EACCES" || ex.code == "EPERM") {
          return null;
        } else
          throw ex;
      }
      return dirData;
    }
    function normalizePath(path) {
      return path.replace(/\\/g, "/");
    }
    function isRegExp(regExp) {
      return typeof regExp === "object" && regExp.constructor == RegExp;
    }
    function directoryTree(path, options, onEachFile, onEachDirectory, currentDepth = 0) {
      options = options || {};
      if (options.depth !== void 0 && options.attributes && options.attributes.indexOf("size") !== -1) {
        throw new Error("usage of size attribute with depth option is prohibited");
      }
      const name = PATH.basename(path);
      path = options.normalizePath ? normalizePath(path) : path;
      const item = { path, name };
      let stats;
      let lstat;
      try {
        stats = FS.statSync(path);
        lstat = FS.lstatSync(path);
      } catch (e) {
        return null;
      }
      if (options.exclude) {
        const excludes = isRegExp(options.exclude) ? [options.exclude] : options.exclude;
        if (excludes.some((exclusion) => exclusion.test(path))) {
          return null;
        }
      }
      if (lstat.isSymbolicLink()) {
        item.isSymbolicLink = true;
        if (options.followSymlinks === false)
          return null;
        if (!options.symlinks)
          options = { ...options, symlinks: [] };
        if (options.symlinks.find((ino) => ino === lstat.ino)) {
          return null;
        } else {
          options.symlinks.push(lstat.ino);
        }
      }
      if (stats.isFile()) {
        const ext = PATH.extname(path).toLowerCase();
        if (options.extensions && !options.extensions.test(ext))
          return null;
        if (options.attributes) {
          options.attributes.forEach((attribute) => {
            switch (attribute) {
              case "extension":
                item.extension = ext;
                break;
              case "type":
                item.type = constants.FILE;
                break;
              default:
                item[attribute] = stats[attribute];
                break;
            }
          });
        }
        if (onEachFile) {
          onEachFile(item, path, stats);
        }
      } else if (stats.isDirectory()) {
        let dirData = safeReadDirSync(path);
        if (dirData === null)
          return null;
        if (options.depth === void 0 || options.depth > currentDepth) {
          item.children = dirData.map((child) => directoryTree(PATH.join(path, child), options, onEachFile, onEachDirectory, currentDepth + 1)).filter((e) => !!e);
        }
        if (options.attributes) {
          options.attributes.forEach((attribute) => {
            switch (attribute) {
              case "size":
                item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
                break;
              case "type":
                item.type = constants.DIRECTORY;
                break;
              case "extension":
                break;
              default:
                item[attribute] = stats[attribute];
                break;
            }
          });
        }
        if (onEachDirectory) {
          onEachDirectory(item, path, stats);
        }
      } else {
        return null;
      }
      return item;
    }
    module.exports = directoryTree;
  }
});
export default require_directory_tree();
//# sourceMappingURL=directory-tree.js.map
