import React from 'react';
import './home.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import teste from '../../assets/bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <h1>Um pouquinho doque já <br /> vivemos 😘</h1>
                    <AiOutlineArrowDown />
                </div>
                <div className="carrosel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={teste}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={teste}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={teste}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </>
    );
}

export default Home;