module.exports = {
    CheckAuth: async function(req, res, next) {
        if(req.isAuthenticated()) {
            console.log('aaa');
            console.log('aaa');
            console.log('aaa');
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}