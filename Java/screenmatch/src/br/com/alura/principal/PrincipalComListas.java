package br.com.alura.principal;

import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;
import br.com.alura.screenmatch.modelos.Titulo;

import java.util.ArrayList;

public class PrincipalComListas {
    public static void main(String[] args) {
        Filme favorito = new Filme("The Matrix", 1999);
        favorito.avalia(9);
        Filme outro = new Filme("John Wick", 2014);
        outro.avalia(6);
        Filme filme = new Filme("Brasileirinhas", 2003);
        filme.avalia(10);
        Serie serie = new Serie("La Casa de Papel", 2017);

        ArrayList<Titulo> lista = new ArrayList<>();
        lista.add(filme);
        lista.add(favorito);
        lista.add(outro);
        lista.add(serie);

        for (Titulo item: lista) {
            System.out.println(item.getNome());
            if(item instanceof Filme umFilme && filme.getClassificacao() > 2) {
                System.out.println("Classificação: " + umFilme.getClassificacao());
            }
        }
    }
}
