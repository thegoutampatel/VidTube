//This is higer order function which accept the function itself and 
//use promises instead of the try catch block.

const asyncHandler = (requestHandler) => {
  return (req, res, next, error) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
        next(error)
    })
  }
};

export { asyncHandler }