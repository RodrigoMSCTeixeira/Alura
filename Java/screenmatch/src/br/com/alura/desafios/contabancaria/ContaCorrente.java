package br.com.alura.desafios.contabancaria;

public class ContaCorrente extends ContaBancaria {

    public void cobrarTarifaMensal() {
        double valorDaTarifa = 14.50;
        System.out.println("Tarifa mensal: R$ " + valorDaTarifa);
        saldo -= valorDaTarifa;
        consultarSaldo();
    }
}
