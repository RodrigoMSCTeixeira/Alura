package br.com.alura.desafios.produtofisico;

public class ProdutoPerecivel extends Produto {
    private String dataValidade;

    @Override
    public String toString() {
        return "ProdutoPerecivel{" +
                "dataValidade='" + dataValidade + '\'' +
                '}';
    }

    public ProdutoPerecivel (String nome, double precoUnitario, int quantidade, String dataValidade) {
        super(nome, precoUnitario, quantidade);
        this.dataValidade = dataValidade;
    }
}
