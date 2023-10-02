// DESAFIO 3: Escrevendo as Classes de Um Jogo
class modeloHeroi {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.vida = 10;
        // definindo ataque
        switch (this.tipo) {
            case "mago":
                this.ataque = "magia";
                break;
            case "guerreiro":
                this.ataque = "espada";
                break;
            case "monge":
                this.ataque = "artes marciais";
                break;
            case "ninja":
                this.ataque = "shuriken";
                break;
        }
    }
    mostrarVida(){
        console.log(`Vida Atual: ${heroi1.vida}`);
    }
    atacar (dano) {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
        this.vida = this.vida - dano;
        console.log(`Perdeu ${dano} de vida`);
        this.mostrarVida();
    }
    beberPocao (){
        if(this.vida === 0){
            console.log(`${this.nome} tem ${this.vida}, e não pode beber poção!`);
        } else if (this.vida >= 1 && this.vida< 9) {
            console.log(`${this.nome} tem ${this.vida} vida e bebeu poção...`);
            console.log(`ganhou mais ${10 - this.vida}`);
            this.vida = this.vida + (10 - this.vida);
        } else {
            console.log("Vida cheia! não pode beber");

        }
    }
}

    let heroi1 = new modeloHeroi("João",18,"monge");
    heroi1.atacar(4);
    heroi1.beberPocao();
    heroi1.mostrarVida();
