const Comment = require('../../database/models/Comment');
const User = require('../../database/models/User');

exports.deleteComment = async (req, res) => {

    const { commentId } = req.body

    if (commentId) {
        try {
            await Comment.destroy({
                where: {
                    id: commentId
                },
            })
            res.send('Comentario Deleted')

        } catch (error) {
            console.log('Se produjo un error', error)
            res.json({ msg: 'error' })
        }

    }
    else console.log('No recibi datos completos para eliminar comentario.')
}