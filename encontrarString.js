

const filme = {
    titulo: "Vingadores",
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor',
    personagemDois: 'Homem Aranha',
    bilheteriaBilhoes: 2
};

function findString(){

    for(let i in filme){
        if(typeof filme[i] === "string"){
            console.log(i,filme[i]);
        }
    }
}