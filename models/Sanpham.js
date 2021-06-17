import mongoose from "mongoose";

const spSchema = mongoose.Schema({
    sp_name: String,
    loai_id: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Sanpham", spSchema);