const path = require('path');

const usersController = {
    usersIndex: (req,res)=>{
        res.render('../views/index.ejs')
    },
    usersServices: (req,res)=>{
        res.render('../views/index.ejs',  { title: 'services'} )
    },
    usersDesign: (req,res)=>{
        res.render('../views/index.ejs',  { title: 'services'})
    }
}

module.exports = usersController;