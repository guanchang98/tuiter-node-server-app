import mongoose from 'mongoose';
import tuitSchema from './tuits-schema.js';
const tuitsModel = await mongoose.model('TuitModel', tuitSchema);

export default tuitsModel;