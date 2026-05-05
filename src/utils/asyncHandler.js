/**
//?.then .catch method
const asyncHandler = (requestHandler) => {
  (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
}

export default asyncHandler
**/

//?TRY CATCH METHOD
//higher order functions: functions that take another function
//as an argument and can also return a new function

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    next(err);
  }
};
//same as const asyncHandler = (fn) => {() => {}}
export default asyncHandler;
