import Loai from "../models/Loai.js";
import Sanpham from "../models/Sanpham.js";


export const findloai = async () => {
    try {
        const userFind = await Loai.findOne({pin: 1111});
        if (userFind!=null){
            console.log("loai_id: ", userFind._id);
            const listSp = await Sanpham.find({loai_id: userFind._id});
            console.log("list",listSp);
            return listSp;
        }   
    } catch(err) {
        console.log(err);
    }
}