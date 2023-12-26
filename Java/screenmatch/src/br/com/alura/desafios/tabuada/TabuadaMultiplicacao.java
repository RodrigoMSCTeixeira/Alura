package br.com.alura.desafios.tabuada;

public class TabuadaMultiplicacao implements Tabuada{
    @Override
    public void mostrarTabuada(int numero) {
        System.out.println("Tabuada do número: " + numero);
        for (int i = 1; i <= 10; i++) {
            int resultado = i * numero;
            System.out.println( numero + " x " + i + " = " + resultado) ;
        }
    }
}
