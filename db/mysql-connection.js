var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : '198.91.81.4',
    user     : 'fleonx12_neko',
    password : 'Neko.Fernando#92', // or the original password : 'apaswword'
    database : 'fleonx12_elctrontest'
})

connection.connect(function(err) {
    if(err){
        console.log("mysql-connection/err.code",err.code)
        console.log("mysql-connection/err.fatal",err.fatal)
    }
})

module.exports = connection