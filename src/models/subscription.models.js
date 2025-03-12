import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema(
    {
        subsriber: {
            type: Schema.Types.ObjectId,  //one who is SUBSCRIBING
            ref: "User"
        },
        chennal:{
            type: Schema.Types.ObjectId,   //one to whom 'subscriber' IS SUBSRIBING
            ref: "User"
        },
    },
    {timestamps: true}
    
);
export const Subscription = mongoose.model("Subscription", subscriptionSchema)