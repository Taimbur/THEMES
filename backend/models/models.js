import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,


        },
        email: {
            type: String,



        },
        phone: {
            type: Number,


        },



    },
    { timestamps: true },
)

export default mongoose.model("User", userSchema)