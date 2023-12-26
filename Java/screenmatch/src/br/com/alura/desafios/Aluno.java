package br.com.alura.desafios;

public class Aluno {
    private String nome;
    private double notas;
    private int numeroDeNotas;

    public String getNome() {
        return nome;
    }
    public double getNotas() {
        return notas;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setNotas(double notas) {
        this.notas += notas;
        this.numeroDeNotas++;
    }

    public double calcularMedia() {
        return notas / numeroDeNotas;
    }
}
