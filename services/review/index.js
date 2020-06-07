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
            let title = req.data.title
            let technical = req.data.technical
            let user = req.data.user
            let management_related = req.data.management_related
            let competitor_related = req.data.competitor_related
            let pricing_issue = req.data.pricing_issue
            let customer_case_issue = req.data.customer_case_issue
            let query = `insert into user (user_id, email) values ('${user_id}', '${email}');`
            await db.query(query, (err, results) => {
                if (err) {
                    reject({
                        error: true,
                        details: err
                    });
                    return
                }
            })

            if (technical) {
                query = `insert into review (user_id, review_type_id, title, description) values ('${user_id}', 1, '${title}', '${technical}');`
                await db.query(query, (err, results) => {
                    if (err) {
                        reject({
                            error: true,
                            details: err
                        });
                        return
                    }
                })
            }

            if (user) {
                query = `insert into review (user_id, review_type_id, title, description) values ('${user_id}', 2, '${title}', '${user}');`
                await db.query(query, (err, results) => {
                    if (err) {
                        reject({
                            error: true,
                            details: err
                        });
                        return
                    }
                })
            }

            if (management_related) {
                query = `insert into review (user_id, review_type_id, title, description) values ('${user_id}', 3, '${title}', '${management_related}');`
                await db.query(query, (err, results) => {
                    if (err) {
                        reject({
                            error: true,
                            details: err
                        });
                        return
                    }
                })
            }

            if (competitor_related) {
                query = `insert into review (user_id, review_type_id, title, description) values ('${user_id}', 4, '${title}', '${competitor_related}');`
                await db.query(query, (err, results) => {
                    if (err) {
                        reject({
                            error: true,
                            details: err
                        });
                        return
                    }
                })
            }

            if (pricing_issue) {
                query = `insert into review (user_id, review_type_id, title, description) values ('${user_id}', 5, '${title}', '${pricing_issue}');`
                await db.query(query, (err, results) => {
                    if (err) {
                        reject({
                            error: true,
                            details: err
                        });
                        return
                    }
                })
            }

            if (customer_case_issue) {
                query = `insert into review (user_id, review_type_id, title, description) values ('${user_id}', 6, '${title}', '${customer_case_issue}');`
                await db.query(query, (err, results) => {
                    if (err) {
                        reject({
                            error: true,
                            details: err
                        });
                        return
                    }
                })
            }

            resolve({ error: false })

        })

    const updateRating = req =>
        new Promise((resolve, reject) => {
            let total_like = req.data.total_like
            let total_dislike = req.data.total_dislike
            let review_id = req.data.review_id
            
            const query = `update review_rating set total_like = ${total_like}, total_dislike = ${total_like} where review_id = ${review_id}`

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
        getAll,
        addNew,
        updateRating
    }
})()

module.exports = Review
