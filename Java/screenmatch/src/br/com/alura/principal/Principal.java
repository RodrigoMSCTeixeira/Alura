package br.com.alura.principal;

import br.com.alura.calculos.FiltroRecomendacao;
import br.com.alura.desafios.Pessoa;
import br.com.alura.desafios.animal.Cachorro;
import br.com.alura.desafios.animal.Gato;
import br.com.alura.desafios.contabancaria.ContaCorrente;
import br.com.alura.desafios.numerosprimos.GeradorPrimo;
import br.com.alura.screenmatch.modelos.Episodio;
import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;
import br.com.alura.calculos.CalculadoraDeTempo;

import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
        Filme favorito = new Filme("The Matrix", 1999);
        favorito.setDuracaoEmMinutos(135);
        favorito.setIncluidoNoPlano(true);

        Filme outro = new Filme("John Wick", 2014);
        outro.setDuracaoEmMinutos(101);
        outro.setIncluidoNoPlano(true);

        /*


        Serie serie = new Serie();
        serie.setNome("La Casa de Papel");
        serie.setAnoDeLancamento(2017);
        serie.setIncluidoNoPlano(true);
        serie.setAtiva(true);
        serie.setTemporadas(5);
        serie.setEpisodiosPorTemporada(10);
        serie.setMinutosPorEpisodio(45);

        CalculadoraDeTempo calculadora = new CalculadoraDeTempo();
        calculadora.inclui(favorito);
        calculadora.inclui(outro);
        calculadora.inclui(serie);

        System.out.println("Tempo total: " + calculadora.getTempoTotal());

        FiltroRecomendacao filtro = new FiltroRecomendacao();
        filtro.filtra(favorito);

        Episodio episodio = new Episodio();
        episodio.setNumero(1);
        episodio.setSerie(serie);
        episodio.setTotalVisualizacoes(300);
        filtro.filtra(episodio);



        ContaCorrente contaCorrente = new ContaCorrente();
        contaCorrente.depositar(158);
        contaCorrente.sacar(100);
        contaCorrente.cobrarTarifaMensal();

         */

        /*
        GeradorPrimo geradorPrimo = new GeradorPrimo();
        geradorPrimo.gerarProximoPrimo(20);
         */

        Filme filme = new Filme("Brasileirinhas", 2003);
        filme.avalia(10);




    }
}