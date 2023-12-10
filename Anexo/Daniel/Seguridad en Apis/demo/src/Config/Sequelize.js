import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const conexion = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
    decimalNumbers: true,
  },
  timezone: "-05:00",
  logging: false,
});
