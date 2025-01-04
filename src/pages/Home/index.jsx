import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Cards from '../../components/Cards';
import './index.scss';

export default function Home() {

  useEffect(() => {
    document.title = 'RPG | Início';
  }, [])

  return (
    <div className="Home">
      <Nav />
      <div className="introducao">
        <h1>A qual família você estará</h1>
        <h2><b style={{ padding: "5px 20px", border: "solid #000 3px", borderRadius: "50px" }}>brindando</b> hoje?</h2>
      </div>

      <div className="familias">
        <Link to={"/Home"}>
          <Cards
            background="/assets/images/backBaronnne.jpeg"
            imagem="/assets/images/personBaronne.png"
            cor="verde"
            nome="BARONNE"
          />
        </Link>
        <Link to={"/Home"}>
          <Cards
            background="/assets/images/backNaguib.jpeg"
            imagem="/assets/images/personNaguib.png"
            cor="amarelo"
            nome="NAGUIB"
          />
        </Link>
        <Link to={"/Home"}>
          <Cards
            background="/assets/images/backMaltevor.jpg"
            imagem="/assets/images/personMaltevor.png"
            cor="preto"
            nome="MALTEVOR"
          />
        </Link>
        <Link to={"/Home"}>
          <Cards
            background="/assets/images/backRurik.jpeg"
            imagem="/assets/images/personRurik.png"
            cor="vermelho"
            nome="RURIK"
          />
        </Link>
      </div>
    </div>
  );
}