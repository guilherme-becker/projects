let conn = require("../src/database");

class Todo {

    listAll() {

        return new Promise((resolve, reject) => {

            conn.query("SELECT * FROM tb_to_do", (error, results) => {

                if(error) reject(error);
                resolve(results);

            });

        });

    }

    save(item = "", id = 0) {

        return new Promise((resolve, reject) => {

            let query;
            let params = [];

            if(id > 0 && item === "") {

                query = "UPDATE tb_to_do SET completed = 1 WHERE id = ?";
                params.push(Number(id));

            } else {
                query = "INSERT INTO tb_to_do (to_do) VALUES (?)";
                params.push(item);
            }

            conn.query(query, params, (err, results) => {

                if(err) reject(err);
                resolve(results);

            });

        });

    }

    delete(id) {

        return new Promise((resolve, reject) => {

            conn.query("DELETE FROM tb_to_do WHERE id = ?", id, (err, results) => {

                if(err) reject(err);
                resolve(results);

            });

        });

    }

}

module.exports = Todo;