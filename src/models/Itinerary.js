import { model, Schema, Types } from "mongoose";

const collection = 'itineraries'

const schema = new Schema ({
    price: {type: Number, min:1, max:5, required: true},
    duration: {type: Number, required: true},
    like: {type: Number, default: 0},
    hashtag: {type: Array},
    comment: {type: String},
    user_id: {type: Types.ObjectId, ref: 'users', required: true},
    city_id: {type: Types.ObjectId, ref: 'cities', required: true}
},
{
    timestamps: true
});

const Itinerary = model(collection,schema);
export default Itinerary;