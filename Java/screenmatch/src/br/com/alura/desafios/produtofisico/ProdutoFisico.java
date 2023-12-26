package br.com.alura.desafios.produtofisico;


public class ProdutoFisico extends Produto implements Calculavel {
    public ProdutoFisico(String nome, double precoUnitario, int quantidade) {
        super(nome, precoUnitario,quantidade);
    }

    @Override
    public double calcularPrecoFinal() {
        return 0;
    }
}
