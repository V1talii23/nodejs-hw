import Note from '../models/note.js';
import createHttpError from 'http-errors';

const getAllNotes = async (req, res) => {
  const notes = await Note.find();

  res.status(200).json(notes);
};

const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId);

  if (!note) {
    createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

const createNote = async (req, res) => {
  const note = await Note.create(req.body);

  res.status(201).json(note);
};

const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
    new: true,
  });

  if (!note) {
    createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await Note.findOneAndDelete(noteId);

  if (!note) {
    createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

export { getAllNotes, getNoteById, createNote, updateNote, deleteNote };
