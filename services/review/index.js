const db = require('../../utils/db')
const Promise = require('bluebird');

const Review = (() => {
    const getAll = req =>
        new Promise((resolve, reject) => {
            const query = `select a.id, a.user_id, a.review_type_id, a.title, a.description, b.description as review_type_desc, c.total_like, c.total_dislike from review a left join review_type b on a.review_type_id = b.id left join review_rating c on a.id = c.review_id`

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


    const addNew = req =>
        new Promise(async (resolve, reject) => {
            let email = req.data.email
            let user_id = new Date().getTime()
            let query = `insert into user (user_id, email) values ('${user_id}', '${email}');`
            console.log(query)
            await db.query(query, (err, results) => {
                if (err) {
                    reject({
                        error: true,
                        details: err
                    });
                    return
                }

                console.log(results)
            })

            resolve({ error: false })
        
        })
    return {
        getAll,
        addNew
    }
})()

module.exports = Review
