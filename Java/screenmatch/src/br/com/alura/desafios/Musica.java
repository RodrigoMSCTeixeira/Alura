package br.com.alura.desafios;

public class Musica {
    String titulo;
    String artista;
    int anoLancamento;
    double avaliacao;
    int numAvaliacoes;

    void exibirFichaTecnica() {
        System.out.println("Título da música: " + titulo);
        System.out.println("Nome do artista: " + artista);
        System.out.println("Ano de lançamento: " + anoLancamento);
        System.out.println("Avaliação: " + avaliacao);
        System.out.println("Número de avaliações: " + numAvaliacoes);
    }

    void avaliarMusica(double nota) {
        avaliacao += nota;
        numAvaliacoes ++;
    }

    double calcularMediaDeAvaliacoes() {
        return avaliacao / numAvaliacoes;
    }
}
