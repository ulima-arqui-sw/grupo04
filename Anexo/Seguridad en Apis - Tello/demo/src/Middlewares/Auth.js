import { Usuario } from "../Models/Usuario.js";
import { validarJWT } from "../Utils/Auth.js";
import { response } from "../Utils/Responses.js";

export const getUsuarioAutenticado = async (req, res, next) => {
  if(!req.headers.authorization){
    return res.status(401).json(response(false, "No se ha enviado el token de acceso", null))
  }

  const token = req.headers.authorization.split(" ")[1];
  if(!token){
    return res.status(401).json(response(false, "No se ha enviado el token de acceso", null))
  }

  const result = validarJWT(token);
  if(typeof result === "string"){
    return res.status(401).json(response(false, result, null))
  }

  const usuario = await Usuario.findByPk(result.id);
  req.user = usuario;
  next();
}

