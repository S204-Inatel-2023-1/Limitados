class ErrorHandler {
    static handleError(error, req, res, next) {
      const statusCode = error.statusCode || 500;
      const message = error.message || "Internal server error";
      res.status(statusCode).json({ error: message });
    }
  }
  
  module.exports = ErrorHandler;
  