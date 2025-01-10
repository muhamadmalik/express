class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statuscode = 404;
    this.name = 'NotFoundError';
  }
}
export default CustomNotFoundError;
