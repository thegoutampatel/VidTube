import mongoose, {Schema, SchemaType, trusted} from "mongoose";

const VideoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true
        },
        thumbnail:{
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        discription: {
            type: String,
            required: true
        },
        views: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
    
);

export const Video = mongoose.model("Video", VideoSchema)