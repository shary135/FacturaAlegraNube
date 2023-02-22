import User from "../models/Usermodels.js";

export const verifyUser = async (req, res, next)=>{
    if(!req.session.userId){
        return res.status(401).json("porfavor ingrese de nuevo p tilin")
    }
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User no encontrado"});
    req.userId = user.id;
    req.role= user.role;
    next();
}
export const adminOnly = async (req, res, next)=>{
    if(!req.session.userId){
        return res.status(401).json("porfavor ingrese de nuevo p tilin")
    }
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User no encontrado"});
    if(user.role !=="admin") return res.status(403).json({msg: "prohibido a este usuario chingar en esta ruta"});
    req.userId = user.id;
    req.role= user.role;
    next();
}