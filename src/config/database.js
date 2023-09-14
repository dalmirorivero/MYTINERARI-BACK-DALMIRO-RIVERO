import { connect } from "mongoose";

// CONEXION A LA BASE DE DATOS
connect(process.env.DBURL)
    .then(() => {
        console.log('db connection success')
    })
    .catch(() => {
        console.log('db connection failed')
    });