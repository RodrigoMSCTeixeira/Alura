package br.com.alura.desafios.animal;

public class Gato extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Miau");
    }

    public void arranharMoveis() {
        System.out.println("O gato arranhou o sofá!");
    }
}


