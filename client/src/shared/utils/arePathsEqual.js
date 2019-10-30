const removeTrailingSlash = path => {
  if (path[path.length - 1] === "/") return path.slice(0, -1);

  return path;
};

export function arePathsEqual(path, pathname) {
  return removeTrailingSlash(path) === removeTrailingSlash(pathname);
}
