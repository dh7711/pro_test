const pService = require("../service/project_service");

const view = {
    login : (req, res) => {
        res.render("login");
    },
    
}
var list = {};
const process  = {
    loginChk : async (req, res) => {
        console.log("req.body : ", req.body);
        
    }
    
}

module.exports = {view, process}