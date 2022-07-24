// Criando a promessa

const myPromise = new Promise((resolve, reject) => {
    const nome = 'Davi'

    if(nome === 'Davi'){
        resolve('Usuário Davi encontrado! ')
    }else{
        reject('O usuário Davi não foi localizado')
    }
})
myPromise.then((data) => {
    console.log(data)
})

//Then Encadeado
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Davi'

    if(nome === 'Davi'){
        resolve('Usuário Davi encontrado! ')
    }else{
        reject('O usuário Davi não foi localizado')
    }
})

//Converte o dado para letra minuscula
//Pode modificar o then encadear para toda a necessidade do software
myPromise2
.then((data) => {
    return data.toLowerCase()
}).then((StringModificado)=>{
    console.log (StringModificado)
})

//Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Teste'

    if(nome === 'Davi'){
        resolve('Usuário Davi encontrado! ')
    }else{
        reject('O usuário Davi não foi localizado')
    }
})
myPromise3
.then((data) => {
    console.log(data)
})
.catch((err)=>{
    console.log('Aconteceu um erro: ' + err)
})
//Resolver vária promessas
//metodo que vai pegar todos as promessas de um array e tentar executar todas elas e enviar uma resposta
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('p1 ok! Timeout')
    }, 2000)
})
const p2 = new Promise((resolve, reject) => {
    
    resolve('p2 ok!')
})
const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!')
})

//chamando metodo da classe all 
//A promessa é executada de forma assincrona se estiver dando erro na hora de executar alguma linha ela não compromete o restante do código, tendo como exemplo requisições em servidores externo
const resolveAll = Promise.all([p1, p2, p3]).then((data)=>{
    console.log(data)
})

console.log("Depois do all()")

//Várias promessas com Race
//vai ser uma exemplo de corrida a primeira que for resolvida vai ser enviada a mensagem de retorno
const p4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('p4 ok! Timeout')
    }, 2000)
})
const p5 = new Promise((resolve, reject) => {
    
    resolve('p5 ok!')
})
const p6 = new Promise((resolve, reject) => {
    resolve('p5 ok!')
})


const resolveAllRace = Promise.race([p4, p5, p6]).then((data)=>{
    console.log(data)
})
// o metodo All ele recebe um array de promises entrega o resultados apenas quando todos estiverem reolvidas
// metodo race ele recebe um array de promises mas retorna o código que deu o fim da promise para primeira promessa que foi resolvida ou seja a primeira que vai ganhar a corrida

const userName = 'DaviMaroto'
fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) =>{
    console.log(data)
}).catch((err)=>{
    console.log(`Houve algum erro: ${err}` )
})