import User from "../models/User.js";
import Token from "../models/Token.js";

// Bcryptjs
import bcrypt from "bcryptjs";

export function createUser(req, res){
    console.log("Post register");
    console.log(req.body);
    User.find({"$or": [{"Username":req.body.user_username}, {"Email":req.body.user_email}]}, function(err, data){
        if(data.length==0){
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.user_password, salt, function(err, hash) {
                    if(err){
                        res.json({
                            "result":0, 
                            "data":"Password encode error!"
                        });
                    }else
                    {
                        // Save user to Mongo Server
                        const newUser = User({
                            user_firstname: req.body.user_firstname,
                            user_lastname: req.body.user_lastname,
                            user_gender: req.body.user_gender,
                            user_email: req.body.user_email,
                            user_username: req.body.user_username,
                            user_password: hash,
                            user_phone: req.body.user_phone,
                            user_address: req.body.user_address,
                            user_avatar: req.body.user_avatar,
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
                });
            });

        }
        else{
            res.json({
                "result":0, 
                "errMsg":"Email/Username is not availble."
            });
        }
    });
    
}