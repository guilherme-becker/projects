const mysql = require("mysql2");
require("dotenv").config();

class Sql {

    constructor() {

        this.conn = mysql.createConnection({
            host: process.env.DB_HOST,
            database: process.env.DB_DBNAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS
        });

    }

    select(query, params = []) {

        return new Promise((resolve, reject) => {

            if(params.length > 0) {

                this.conn.query(query, params, (err, result) => {
                    if(err) reject(err);
                    resolve(result);
                });

            } else {

                this.conn.query(query, (err, result) => {
                    if(err) reject(err);
                    resolve(result);
                });
            }

        });

    }

}

module.exports = Sql;