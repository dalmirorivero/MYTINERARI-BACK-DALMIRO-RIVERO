import { model, Schema } from "mongoose";

const collection = 'users'

const schema = new Schema ({
    name: {type: String, required: true },
    lname: {type: String },
    mail: {type: String, required: true, unique: true },
    photo: {type: String, 
            default: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
        },
    password: {type: String, required: true },
    country: {type: String}
},
{
    timestamps: true
});

const User = model(collection, schema);
export default User;