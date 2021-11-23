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