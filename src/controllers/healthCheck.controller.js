import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js'

const healthCheck = asyncHandler( async (req, res) => {
    res.status(200).json(new ApiResponse(200, "Ok", "health check passed"))
    // res.status(200).json("ok")
})

// const healthCheck = async (req, res) =>{
//     res.status(200).json("Hello")
// }

export {healthCheck}
