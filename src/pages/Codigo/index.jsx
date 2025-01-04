import { useNavigate } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';


export default function Codigo() {

  useEffect(() => {
    document.title = 'RPG | Acesso';
  }, [])


  const navigate = useNavigate()
  const [senha, setSenha] = useState("")

  function validar() {
    if (senha === "4SC3NÇÃ0!") {
      toast.success("Acesso permitido!",
        {
          style: {
            border: 'solid 1px #fff',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      navigate('/Home')
    }
    else {
      toast.error('senha inválida',
        {
          style: {
            border: 'solid 1px #fff',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
  }

  return (
    <div className="Codigo">
      <img src="/assets/images/logoIniciob.png" alt="logo" />
      <p>INSIRAO CÓDIGODO CONVITE</p>
      <div className="inputAlign">
        <input type="text" onChange={e => setSenha(e.target.value)} />
        <button onClick={validar}>ENTRAR</button>
      </div>
    </div>
  );
}
