import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="greeting">
                    <div className="text">
                        <h1>Olá senhora !</h1>
                        <h2>Tudo bem ?</h2>
                    </div>
                </div>
                <div className="amo">
                    <h1>Vim aqui te dizer o quanto <span>te amo</span>, e o quanto é <span>importante</span> para mim.</h1>
                </div>
                <div className="vivemos">
                    <Link to="/ourHistory"><h1 className='text-v'>Um pouquinho do que já <br /> vivemos 😘</h1></Link>
                </div>
            </div>
        </>
    );
}

export default Home;