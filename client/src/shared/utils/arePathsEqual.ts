const removeTrailingSlash = (path: string): string => {
  if (path[path.length - 1] === '/') return path.slice(0, -1);

  return path;
};

export function arePathsEqual(path: string, pathname: string): boolean {
  return removeTrailingSlash(path) === removeTrailingSlash(pathname);
}
