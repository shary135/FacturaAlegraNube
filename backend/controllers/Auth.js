import User from "../models/Usermodels.js";
import argon2 from "argon2";

export const login = async (req,res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "User no encontrado"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg:"usuario con contra incorrecta"})
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    const role = user.role
    res.status(200).json({uuid, name, email, role});

}
export const Me = async (req,res) =>{
    if(!req.session.userId){
        return res.status(401).json("porfavor ingrese de nuevo p tilin")
    }
    const user = await User.findOne({
        attributes:['uuid','name','email','role'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User no encontrado"});
    res.status(200).json(user)
}
export const logOut = (req,res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "error al eliminar session"})
        res.status(200).json({msg:"todo chido"})
    })
}