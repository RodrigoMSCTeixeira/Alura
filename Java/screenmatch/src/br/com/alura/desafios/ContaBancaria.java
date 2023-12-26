package br.com.alura.desafios;

public class ContaBancaria {
    private int numeroConta;
    private double saldo;
    public String titular;

    public double getSaldo() {
        return saldo;
    }
    public int getNumeroConta() {
        return numeroConta;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }
}
