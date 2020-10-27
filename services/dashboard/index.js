const db = require('../../utils/db')

const Dashboard = (() => {
    const getAll = req =>
        new Promise((resolve, reject) => {
            const query = `select * from patient`

            db.query(query, (err, results) => {
                if (err) {
                    reject({
                        error: true,
                        details: err
                    });
                    return
                }

                resolve({ error: false, data: results })

            })
        })


    return {
        getAll
    }
})()

module.exports = Dashboard
