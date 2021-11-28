const requests = require("supertest")
const app = require("express")

function soma(a,b){
    return a+b
}

function somaTres(a,b,c){
    return a+b-c
}

test("Deve adicionar dois numero inteiros e retornar um numero inteiro", () =>{
    expect(soma(1,2)).toBe(3)

})

test("Deve adicionar dois numero inteiros e retornar um numero inteiro", () =>{
    expect(somaTres(1,2,3)).toBe(6)

})

test("Should teste route to get all users", () => {
    requests(app)
    .get("/users")
    .expect("Content-type", /json/)     
    .expect(200)
    .end((error, res) => {
        if(error) console.log(error)
    })


})