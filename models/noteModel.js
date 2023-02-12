const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const noteSchema = new Schema({
    title: String,
    content: String
});

const noteModel = mongoose.model('notes', noteSchema);

noteSchema.index({title:'text', content:'text'}, {weights:{title:2, content:1}, name:'indice'})

module.exports = noteModel;