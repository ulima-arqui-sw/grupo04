import { Usuario } from "../Models/Usuario.js";
import { generarJWT } from "../Utils/Auth.js";
import { compararPassword } from "../Utils/Encript.js";
import { response } from "../Utils/Responses.js";

export const login = async (req, res) => {
  try {
    const { correo, password } = req.body;
    //valida si existe el correo
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(404).json(response(false, "Usuario no encontrado", null));
    }
    //valida password
    const passwordValido = await compararPassword(password, usuario.password);
    if (!passwordValido) {
      return res.status(400).json(response(false, "Contraseña incorrecta", null));
    }
    //genera token que dura 2 horas
    const token = generarJWT(usuario.getDataValue("usuario_id"));
    return res.status(200).json(response(true, "Usuario logueado correctamente", { token }));
  } catch (err) {
    console.log(err);
    return res.status(500).json(response(false, "Error al loguear el usuario", null));
  }
};

export const perfil = async (req, res) => {
  try {
    const { usuario_id } = req.user;
    const usuario = await Usuario.findByPk(usuario_id, {
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "estado"],
      },
    });
    return res.status(200).json(response(true, "Perfil de usuario", usuario));
  } catch (err) {
    console.log(err);
  }
};
