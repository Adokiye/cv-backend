const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const ReplySchema = mongoose.Schema({
    description: {type: String, required: true},
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
});
ReplySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Reply', ReplySchema);
