module.exports = function (app) {
    return function (req, res) {
        var category =  app.model.category;
        category.find({},function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Resource not found'});
            }
        });

    }
};