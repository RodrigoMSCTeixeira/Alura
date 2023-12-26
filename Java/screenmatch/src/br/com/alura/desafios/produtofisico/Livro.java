package br.com.alura.desafios.produtofisico;

public class Livro extends Produto implements Calculavel{
    private String autor;

    public Livro(String nome, double precoUnitario, int quantidade) {
        super(nome, precoUnitario, quantidade);
    }

    @Override
    public double calcularPrecoFinal() {
        return 0;
    }
}
