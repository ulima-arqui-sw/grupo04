import { rateLimit } from 'express-rate-limit'

export const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 15 minutos
	limit: 5, // Limita a 100 peticiones por cada 15 minutos
	standardHeaders: 'draft-7',
	legacyHeaders: false,
  message: "Excediste el limite de peticiones, intentalo mas tarde",
})