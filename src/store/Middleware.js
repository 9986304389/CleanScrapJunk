// myMiddleware.js

const myMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching action:', action);
    return next(action);
  };
  
  export default myMiddleware;
  