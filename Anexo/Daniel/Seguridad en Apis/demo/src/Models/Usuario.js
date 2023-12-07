import { DataTypes } from "sequelize"
import { conexion } from "../Config/Sequelize.js";

export const Usuario = conexion.define("usuario",{
    usuario_id:{
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        field: "usuario_id",
    },
    nombre:{
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "nombre",
    },
    apellido:{
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "apellido",
    },
    dni:{
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true,
        field: "dni",
    },
    correo:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: "correo",
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "password",
    },
    telefono: {
        type: DataTypes.STRING(9),
        field: "telefono",
    },
    fotoperfil:{
        type: DataTypes.STRING(20000),
        field: "fotoperfil",
    },
    estado:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: "estado",
    },
},{
    timestamps: false,
    tableName: "usuario",
    freezeTableName: true,
})
