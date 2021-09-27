const Comment = require('../../database/models/Comment');
const User = require('../../database/models/User');


// Diego: Si recibe un id de Evento por query, se hace una consulta de solo los comentarios
// que hagan match con ese ID; de lo contrario trae todos los comentarios. En ambos casos separa todos
// los comentarios por rating y los envia en un array de objetos con formato [{x: []}, {y: []}].
exports.getAllComments = async (req, res) => {

    const { id } = req.query;
    let consult;

    if (id) {
        try {
            consult = await Comment.findAll({
                where: {
                    eventId: id
                },
                include: User,
            })

        } catch (e) {
            console.log(e);
            res.json({ msg: 'error!!' })
        }
    }
    else {
        try {
            // Fetches all comments
            consult = await Comment.findAll({
                include: User,
            })

        } catch (e) {
            console.log(e);
            res.json({ msg: 'error!!' })
        }
    }

    // Sorts comments into arrays by rating
    if (consult.length) {
        let result = [
            { oneStar: [] },
            { twoStars: [] },
            { threeStars: [] },
            { fourStars: [] },
            { fiveStars: [] },
        ]
        consult.forEach(comment => {
            switch (parseInt(comment.rating)) {
                case 1:
                    result[0].oneStar.push(comment)
                    break;

                case 2:
                    result[1].twoStars.push(comment)
                    break;

                case 3:
                    result[2].threeStars.push(comment)
                    break;

                case 4:
                    result[3].fourStars.push(comment)
                    break;

                case 5:
                    result[4].fiveStars.push(comment)
                    break;

                default:
                    break;
            }
        })

        return res.json(result)
    }
    else {
        res.json(consult)
    }
}
exports.getSomeComments = async (req, res) => {

    const { id } = req.query;
    let consult;

    if (id) {
        try {
            consult = await Comment.findAll({
                where: {
                    eventId: id
                },
                include: User,
            })

            while (consult.length > 5) {
                consult.splice(Math.random(0, consult.length), 1)
            }

            res.json(consult)
        } catch (error) {
            console.log(e)
        }
    }
    else {
        return 'No id provided.'
    }
}
// Obtiene los comentarios de un evento en particular y promedia los ratings. Retorna un numero.
exports.getGeneralRating = async (req, res) => {

    const { id } = req.query;

    const findAvg = (data) => {
        if (!data.length) return 0
        else {
            let arr = []
            data.forEach(comment => arr.push(Number(comment.rating)))
            let quantity = arr.length
            let sum = arr.reduce((a, b) => a + b, 0)
            return Math.floor(sum / quantity)
        }
    }

    try {
        const consult = await Comment.findAll({
            where: {
                eventId: id
            }
        })
        res.json(findAvg(consult))

    } catch (e) {
        console.log(e);
        res.json({ msg: 'error!!' })
    }
}
