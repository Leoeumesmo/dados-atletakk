class Atleta {
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria(){
    if(this.idade >= 9 && this.idade <= 11)
      return "Infantil"
    if(this.idade >= 12 && this.idade <= 13)
    return "Juvenil"
    if(this.idade >= 14 && this.idade <= 15)
    return "Intermediário"
    if(this.idade >= 16 && this.idade <= 30)
    return "Adulto"
    else {
      return "Sem categoria"
    }
  }
  calculaIMC(){
    return this.peso /(this.altura * this.altura)
  }
  calculaMediaValida(){
        let soma = 0
        this.notas = this.notas.sort();
   this.notas = this.notas.slice(1, 4);
   this.notas.forEach(function(nota){
      soma = soma + nota
   })
   return soma / this.notas.length
    }

  obtemNomeAtleta(){
    return this.nome

  }
  obtemIdadeAtleta(){
    return this.idade

  }
  obtemPesoAtleta(){
    return this.peso

  }
  obtemAlturaAtleta(){
    return this.altura
  }
  
  obtemNotasAtleta(){
    return this.notas

  }
  obtemCategoria(){
    return atleta.calculaCategoria()

  }
  obtemIMC(){
    return atleta.calculaIMC()

  }
  obtemMediaValida(){
    return atleta.calculaMediaValida()

  }
}


 const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    console.log("Nome: " + atleta.obtemNomeAtleta())
    console.log("Idade " + atleta.obtemIdadeAtleta())
    console.log("Peso: " + atleta.obtemPesoAtleta())
    console.log("Altura: " + atleta.obtemAlturaAtleta())
    console.log("Notas: " + atleta.obtemNotasAtleta())
    console.log("Categoria: " + atleta.obtemCategoria())
    console.log("IMC: " + atleta.obtemIMC())
    console.log("Média Válida: " + atleta.obtemMediaValida())
