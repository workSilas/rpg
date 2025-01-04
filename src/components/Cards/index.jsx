import './index.scss';
import AnimatedSection from '../Animaçao';

export default function Cards(props) {

  return (
    <div id={props.cor} style={{ backgroundImage: `url(${props.background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="Cards">
      <AnimatedSection>
        <img src={props.imagem} alt="familia" />
      </AnimatedSection>
      <p>{props.nome}</p>
    </div>
  );
}
