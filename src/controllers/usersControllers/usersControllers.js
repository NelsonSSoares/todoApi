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
        console.log(req.body)
        res.send(`Rota POST de tarefa ativada: Usuario: ${req.body.nome}, Idade: ${req.body.idade}`)
    }
};

module.exports =  new usersControllers();



/*
function usersHandler(req, res){
    res.send("Rota ativada com metodo GET!!");

}
module.exports = usersHandler;
*/