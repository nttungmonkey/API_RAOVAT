import User from "../models/User.js";
import Token from "../models/Token.js";
import Sanpham from "../models/Sanpham.js";

// Bcryptjs
import bcrypt from "bcryptjs";
export function createUser(req, res){
    console.log("body", req.body);
    // Save user to Mongo Server
    const newUser = new Sanpham({
        sp_name: req.body.sp_name,
        loai_id: req.body.loai_id,
    });

    return newUser
            .save()
            .then((newUser) => {
                res.json({
                    "result": 1,
                    "data": newUser
                });
            })
            .catch((error) => {
                res.json({
                    "result": false,
                    "errMsg": error.message
                });
            });       





}