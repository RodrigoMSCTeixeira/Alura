package br.com.alura.desafios;

public class Carro {
    String modelo;
    int ano;
    String cor;

    void exibirFichaTecnica() {
        System.out.println("Modelo: " + modelo);
        System.out.println("Ano: " + ano);
        System.out.println("Cor: " + cor);
    }

    int calcularIdadeDoCarro() {
        int anoAtual = 2023;
        return anoAtual - ano;
    }
}
