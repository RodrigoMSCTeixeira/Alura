package br.com.alura.desafios;
public class Produto {
    private String nome;
    private double preco;

    public String getNome() {
        return nome;
    }
    public double getPreco() {
        return preco;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setPreco(double preco) {
        this.preco = preco;
    }

    public void aplicarDesconto(double percentual) {
        double valorDoDesconto = (preco * percentual) / 100;
        preco -= valorDoDesconto;
    }

}
