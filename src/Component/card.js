import React from 'react';
import p4 from './poker-qr/1B.svg';
export default function Cardimg({ card, handleclick, flipped,disable }) {
    const handlechoice = (card) => {
        if(!disable){
            handleclick(card)
        }
    }
    return (
        <div className='background'>
            <div className={flipped?'img-container active':'img-container'} key={card.id}>
                <img src={card.src} alt={card.id} className='face front'></img>
                <img className='face back'
                    src={p4}
                    alt='asdada'
                    onClick={() => handlechoice(card)}/>
            </div>
        </div>
    )
}
