import { Router } from "express";
import { login, perfil } from "../Controllers/Usuario.js";
import { limiter } from "../Middlewares/RateLimiting.js";
import { getUsuarioAutenticado } from "../Middlewares/Auth.js";

export const usuarioRouter = Router();

usuarioRouter.route('/usuario/login').post(limiter, login);
usuarioRouter.route('/usuario/perfil').get(getUsuarioAutenticado, perfil);