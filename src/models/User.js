import { model,Schema } from "mongoose";

const collection = 'users'

const schema = new Schema ({
    name: {type: String, required: true  },
    lname: {type: String },
    mail: {type: String, required: true, unique: true },
    photo: {type: String, default: "💥"},
    password: {type: String, required: true },
    country: {type: String}
});

const User = model(collection, schema);
export default User;