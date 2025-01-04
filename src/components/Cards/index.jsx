import './index.scss';

export default function Cards(props) {

  return (
    <div id={props.cor} style={{ backgroundImage: `url(${props.background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="Cards">
      <img  src={props.imagem} alt="familia" />
    </div>
  );
}
