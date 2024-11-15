import mongoose from "mongoose";
import User from "../entities/user.entity.js";
import bcrypt from "bcrypt";

export const userRegister= async (req, res) => {

    const {firstName, lastName, email, password, isAdmin} = req.body

    const vUser = await User.findOne({email : req.body.email});
    if(vUser){
        res.status(400).json({
            "mensaje": "El usuario ya existe"
        });
    
    }else{

    const salt = await bcrypt.genSalt(10);
    const bcPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create
    ({
        firstName,
        lastName,
        email,
        password: bcPassword,
        isAdmin
    })
    
    res.status(201).json(newUser) 
    }
};

export const userLogin= (req, res) => {
    res.send("login de usuario")    
};  