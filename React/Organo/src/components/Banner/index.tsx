import "./Banner.css";

interface BannerProps {
  enderecoImage: string;
  textoAlternativo?: string;
}

function Banner({ enderecoImage, textoAlternativo }: BannerProps) {
  return (
    <header className="banner">
      {/* <img
        src="/images/banner.png"
        alt="O banner principal da página do Organo"
      /> */}
      <img src={enderecoImage} alt={textoAlternativo} />
    </header>
  );
}

export default Banner;
