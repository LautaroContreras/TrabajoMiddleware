const fs = require('fs');

function usersMiddleware(req,res,next){
    fs.appendFileSync('userLogs.txt','El usuario ingreso a la ruta' + req.url)

    next();
}

module.exports = usersMiddleware;