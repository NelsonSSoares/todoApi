class usersControllers{
    show = (req, res)=> {
        res.send(
            "Rota de usuarios Ativada com GET"
        );
    };
};

module.exports = usersControllers;
/*
function usersHandler(req, res){
    res.send("Rota ativada com metodo GET!!");

}
module.exports = usersHandler;
*/