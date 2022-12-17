import React from 'react';

import './momentos.css';
import foto from '../../assets/bg.jpg';
import foto1 from '../../assets/teste.jpg';
import foto2 from '../../assets/foto (1).jpg';
import foto3 from '../../assets/foto (2).jpg';
import foto4 from '../../assets/foto (3).jpg';
import foto5 from '../../assets/foto (4).jpg';

const Momentos = () => {
    return (
        <div className="momentos">
            <h1 className='title-m'>Algumas fotinhas que amo</h1>
            <div className="fotinhas">
                <img className='foto' src={foto} alt="" />
                <img className='foto' src={foto1} alt="" />
                <img className='foto' src={foto2} alt="" />
                <img className='foto' src={foto3} alt="" />
                <img className='foto' src={foto4} alt="" />
                <img className='foto' src={foto5} alt="" />
            </div>
            <a href="https://drive.google.com/drive/folders/13CwXHyK9ckuvHyAaEBeVS2tCoSl_nuCu?usp=sharing" target="_blank" rel='noreferrer'><div className="baixar">
                Baixar fotinhas
            </div></a>
        </div >
    );
}

export default Momentos;