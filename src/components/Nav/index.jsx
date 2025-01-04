import './index.scss';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <div className="Nav">
      <img src="/assets/images/logoInicio.png" alt="logo" />
      <div className="links">
          <Link to={"/Home"}>INÍCIO</Link>
          <Link to={"/Home"}>EVENTO</Link>
          <Link to={"/Home"}>DÚVIDAS FREQUENTES</Link>
          <Link to={"/Home"}>CONTATO</Link>
      </div>
    </div>
  );
}


