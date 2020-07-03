import mongoose from 'mongoose';

interface BasicData {
  type: string | Date;
  required?: boolean;
  default?: Date;
}

interface Data {
  title: BasicData;
  description: BasicData;
  date: BasicData;
}

const PostSchema: mongoose.Schema<Data> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const mongooseModelPost: mongoose.Model<mongoose.Document, {}> = mongoose.model('mongo-project', PostSchema);

export { mongooseModelPost };
