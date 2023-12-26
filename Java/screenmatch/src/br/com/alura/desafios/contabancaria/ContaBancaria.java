package br.com.alura.desafios.contabancaria;

public class ContaBancaria {
    protected double saldo;

    public void depositar (double valor) {
        System.out.println("Valor do depósito: R$ " + valor);
        System.out.println("Saldo Anterior: R$ " + saldo);
        saldo += valor;
        consultarSaldo();
    }

    public void sacar (double valor) {
        System.out.println("Valor a sacar: R$ " + valor);
        System.out.println("Saldo Anterior: R$ " + saldo);

        if(valor <= saldo) {
            saldo -= valor;
            consultarSaldo();
        } else {
            System.out.println("Saldo insuficiente para saque.");
        }

    }

    protected void consultarSaldo() {
        System.out.println("Saldo atual: R$ " + saldo);
    }
}
