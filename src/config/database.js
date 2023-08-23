import { connect } from "mongoose";

connect(process.env.DBURL)
        .then(() => {
            console.log('db connection success')
        })
        .catch(() => {
            console.log('db connection failed')
        });