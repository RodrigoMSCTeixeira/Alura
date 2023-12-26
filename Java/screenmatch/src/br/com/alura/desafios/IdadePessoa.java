package br.com.alura.desafios;
public class IdadePessoa {
    private String nome;
    private int idade;

    public int getIdade() {
        return idade;
    }
    public String getNome() {
        return nome;
    }
    public void setIdade(int idade) {
        this.idade = idade;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void verificarIdade() {
        if(idade >= 18) {
            System.out.println("É maior de idade!");
        } else {
            System.out.println("É menor de idade!");
        }
    }
}
