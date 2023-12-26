package br.com.alura.minhasmusicas.principal;
import br.com.alura.minhasmusicas.modelo.MinhasPreferidas;
import br.com.alura.minhasmusicas.modelo.Musica;
import br.com.alura.minhasmusicas.modelo.Podcast;

public class Principal {
    public static void main (String[] args) {
        Musica minhaMusica = new Musica();
        minhaMusica.setTitulo("Forever");
        minhaMusica.setCantor("Kiss");

        for (int i = 0; i < 1000; i++) {
            minhaMusica.reproduz();
        }

        for (int i = 0; i < 50; i++) {
            minhaMusica.curte();
        }

        Podcast meuPodcast = new Podcast();
        meuPodcast.setTitulo("Bolha DEV");
        meuPodcast.setApresentador("Marcos Mendes");

        for (int i = 0; i < 5000; i++) {
            meuPodcast.reproduz();
        }

        for (int i = 0; i < 1000; i++) {
            meuPodcast.curte();
        }

        MinhasPreferidas preferidas = new MinhasPreferidas();
        preferidas.Inclui(minhaMusica);
        preferidas.Inclui(meuPodcast);
    }
}
