module.exports = function (app) {
    return function (req, res, next) {
        var user = new app.model.user({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            dateOfBirth:req.body.dateOfBirth,
            address:req.body.address,
            city:req.body.city,
            country:req.body.country,
            email:req.body.email,
            username: req.body.username,
            password : req.body.password,
            avatar :req.body.avatar,
            description : req.body.description,
            facebook : req.body.facebook,
            twitter : req.body.twitter,
            steam : req.body.steam,
            youtube : req.body.youtube,
            twitch : req.body.twitch,
            website : req.body.website,
            certified: req.body.certified,
            datetimeRegister: req.body.datetimeRegister,
            datetimeLastLogin: req.body.datetimeLastLogin,
            friends: [],
            followers: [],
            subscribers: []
        });
        user.save(function (err,result) {
            if (err) {
                console.error(err);
                res.status(500).send({error: "Server error, please try again later"});
            }
            res.status(201).send({_id: result._id});
        });
    }
};