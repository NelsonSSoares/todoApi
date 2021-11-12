class usersControllers{
    show = (req, res)=> {
        res.send(
            {
                id: 1,
                nome: 'Nelson',
                email: 'punkpunkada@gmail.com',
                datanasc: '1993-09-05',
                senha: 'Unkown'
            }
        );
        
    };
    save = (req, res) => {
        req.body;
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }
};

module.exports = usersControllers;



/*
function usersHandler(req, res){
    res.send("Rota ativada com metodo GET!!");

}
module.exports = usersHandler;
*/