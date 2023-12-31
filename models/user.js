import {Schema, model, models} from "mongoose";

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"],
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username in valid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});


//this would have to be used if the server was always running
//but in nextjs, route will be created and running for the time when it is getting called so we need to make one more check
//check =>> models obj   is provided ny Mongose lib. if there's no existing model for the same then create new model
const User = models.User || model("User", UserSchema);

export default User;