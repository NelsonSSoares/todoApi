class taskControllers{
    show = (req, res)=> {
        res.send(
            "Rota de tarefas Ativada com GET"
        );
    };
};

module.exports = taskControllers;

/*
function taskHandler(req, res){
    res.send("Rota ativada com metodo GET!!");

}
module.exports = taskHandler;
*/