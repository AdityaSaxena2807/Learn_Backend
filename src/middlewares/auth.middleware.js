import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  //_ is used when we dont have any use of that parameter(response)
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    //accessToken is in cookies

    if (!token) {
      throw new ApiError("Unauthorized request", 401);
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(error?.message || "Invalid access token", 401);
  }
});
