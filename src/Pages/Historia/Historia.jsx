import React from 'react';

import './historia.css';
import image from '../../assets/bg.jpg';

const Historia = () => {
    return (
        <>
            <div className="historia">
                <h1 className='title-h'>Um pouco da nossa história</h1>
                <p className='hist'>Bom, nesse textinho aqui vou contar um pouquinho da nossa história de vida, então vamos lá!, por incrivel que pareça a gente se conhece beeeem mais do que um ano, a minha vida e a sua andam juntas a bastante tempo, andamos nos vendo des do Tia Mariinha nos Jardins 1 e 2, depois disso fomos para o Lavínia e passamos um tempo juntos na mesma sala, a senhora foi para outra escola em Rio Grande e voltou depois pro Lavinia, só que na sala B :(, depois disso cada um foi para um lado, mas lembravamos ainda um do outro, a senhorita foi para o Ruth e eu no Carlos Rhom, ainda nos davamos uns amassos de vez em quando kkk, mas nem sempre, e des dessa época eu sempre almejei estar ao seu lado, mas tinha muita vergonha para pedir qualquer coisa, tanto que para a gente ficar na etec, quem teve a iniciativa foi a senhora ksksk, voltando para o Carlos Rhom, eu com meu estilo mandrake e a senhora um pouco distante de mim eu só poderia te almejar e ficar as vezes com a senhorita, mas des dessa epoca tava te querendo, depois disso fomos para a Etec juntos, mas em cursos diferentes só que sempre viamos a cara um do outro, até que perguntei se queria ir para a tenda, (segundas intenções é lógico, a senhora já sabia tambêm kkk), até que a senhora que teve a iniciativa de "me obrigar" a ir kjsksksk porque eu tinha pedido, e nesse dia, começou a chover, ficamos encharcados e ficamos de amorzinho lá, até que quando já estavamos secos a senhora perguntou se queria que eu fosse ao cinema junto para assistirmos Homem-Aranha, fomos, ficamos de amorzinho des da fila (que estava imensa e nós não precisavamos pegar mesmo estando nela ksksksk) até o final da noite, e quando fomos cada um para sua casa, me mandaram uma "indireta" super direta dizendo que uma pessoinha ai estava esperando o pedido, até que eu te mandei uma frase: "Quer namorar comigo ?", e a minha princesa disse: "Sim", e com essa mesma frase eu te pergunto, Quer namorar comigo denovo amor ?</p>

                <div className="img-h">
                    <img className='image' src={image} alt="bg tst" />
                </div>
            </div>
        </>
    );
}

export default Historia;