const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    userId: String,
    title: String,
    content: String,
    isCompleted: Boolean,
    taskPriority: Number //1 - low, 2 - medium, 3 - high
})

const NoteModel = mongoose.model('Note', NoteSchema)

module.exports = NoteModel