var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var game = app.model.game;
        var categoryId = req.params.categoryId;
        game.find({
            categoryId: categoryId
        }, function (err, result) {
            if (err) {
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.status(200).send(result)
                }
                else{
                    res.status(404).send({error: 'Resource not found'});
                }
            }
        });

    }
};