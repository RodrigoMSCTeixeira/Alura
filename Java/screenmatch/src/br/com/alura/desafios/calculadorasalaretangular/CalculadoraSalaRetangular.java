package br.com.alura.desafios.calculadorasalaretangular;

public class CalculadoraSalaRetangular implements CalculoGeometrico {
    @Override
    public void calcularArea(double altura, double largura) {
        double area = largura * altura;
        System.out.println("A área da sala retangular é: " + area);
    }

    @Override
    public void calcularPerimetro(double altura, double largura) {
        double perimetro = 2 * (largura + altura);
        System.out.println("O perímetro da sala retangular é: " + perimetro);
    }
}
