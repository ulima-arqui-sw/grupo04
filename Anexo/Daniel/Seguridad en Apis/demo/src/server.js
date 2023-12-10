import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { conexion } from './Config/Sequelize.js';
import { usuarioRouter } from './Routes/usuario.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenidos al API demo de seguridad en APIs');
});
app.use(usuarioRouter);

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  try {
    await conexion.sync({ alter: false });
    console.log("Base de datos Postgres sincronizada");
 } catch (err) {
    console.log(err);
 }
})