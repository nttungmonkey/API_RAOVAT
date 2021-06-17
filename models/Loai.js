import mongoose from "mongoose";

const loaiSchema = mongoose.Schema({
    pin: Number
});

export default mongoose.model("Loai", loaiSchema);