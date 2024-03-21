// myMiddleware.js

const myMiddleware = (store) => (next) => (action) => {

  return next(action);
};

export default myMiddleware;
