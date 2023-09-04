import { model, Schema } from "mongoose";

const collection = 'cities'

const schema = new Schema ({
    name: {type: String, required: true },
    country: {type: String, required: true },
    image: {type: String, required: true }
}, 
{
    timestamps: true
});

const City = model(collection, schema);

export default City;