const model = require('../models/index');

module.exports = {
    getAllUsers(){
        return new Promise(resolve => {
            model.users.findAll({
            }).then(users => {
               resolve(users)
            })
        })
    },
    getOneUser(userid){
        return new Promise(resolve => {
            model.users.findOne({
                where:{
                    id: userid
                }
            }).then(users => {
               resolve(users)
            })
        })
    }
}