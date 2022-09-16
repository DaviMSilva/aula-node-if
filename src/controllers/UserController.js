module.exports = class UserController{

    static newUser(req, res){
        res.render('user/userform')
    }
}