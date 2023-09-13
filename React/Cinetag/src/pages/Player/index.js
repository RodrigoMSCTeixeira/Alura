import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import NaoEncontrado from 'pages/NaoEncontrado/NaoEncontrado'
import videos from 'json/db.json'


function Player() {
  const paramentros = useParams()
  const video = videos.find((video) => {
    return video.id === Number(paramentros.id)
  })

  if (!video) {
    return <NaoEncontrado />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>

        <section className={styles.container}>
          <iframe width="100%" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>

      </Titulo>
    </>
  )
}

export default Player