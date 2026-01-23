import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      enum: TAGS,
      default: 'Todo',
    },
  },
  { timestamps: true, versionKey: false },
);

noteSchema.index(
  { title: 'text' },
  {
    weights: { title: 10, content: 3 },
    default_language: 'english',
  },
);

const Note = model('Note', noteSchema);

export default Note;
