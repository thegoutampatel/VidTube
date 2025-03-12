import mongoose, {Schema} from "mongoose";

const commentSchema = new Schema(
    {
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
        like:{
            type: Schema.Types.ObjectId,
            ref: "Like"
        },
        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet"
        },
        commentBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {timestamps: true}
    
);
export const Comment = mongoose.model("Comment", commentSchema)