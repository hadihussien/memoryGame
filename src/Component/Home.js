import React, { useEffect, useState } from 'react'
import Cardimg from './card'
import Ace from './poker-qr/pexels-pixabay-262333.jpg'
import deck from './poker-qr/pexels-pixabay-279009.jpg'
import circulerDeck from './poker-qr/pexels-pixabay-39018.jpg'
import blackAce from './poker-qr/pexels-raka-miftah-4253623.jpg'

export default function Home() {
    const [card, setCard] = useState([]);
    const [firstchoice, setfirstchoice] = useState(null);
    const [secondchoice, setsecondchoice] = useState(null);
    const [counter,setcounter] = useState(0);
    const [disable,setdisable] = useState(false);
    const cards = [
        { "src": Ace, matched: false },
        { "src": deck, matched: false },
        { "src": circulerDeck, matched: false },
        { "src": blackAce, matched: false }]
    // sort the cards
        const sortcard = () => {
        const sortedCards = [...cards, ...cards].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
        setCard(sortedCards)
        setcounter(0)
    }
    const handleclick = (card) => {
        return firstchoice ? setsecondchoice(card) : setfirstchoice(card);
    }
    // compare two card
    useEffect(() => {
        if (firstchoice && secondchoice) {
            setdisable(true)
            if(!disable){
            if (firstchoice.src === secondchoice.src) {
                setCard(card.map(ca => {
                    if (ca.src === firstchoice.src) {
                        return ({ ...ca, matched: true }) 
                    }
                    else {
                        return ca
                    }
                }))
                clearstate()
                setcounter(counter+1)
                console.log(card)
            }
            else {
                setTimeout(() => {
                    setcounter(counter+1)
                    clearstate()
                }, 800);
            }
        }} 
    }, [firstchoice, secondchoice])

    //clear the counter and the choices

    const clearstate = () => {
        setfirstchoice(null)
        setsecondchoice(null)
        setdisable(false)
    }
    return (
        <>
            <div className='heading'>
                <h1>Memory Game</h1>
                <button onClick={sortcard}>New Game</button>
            </div>
            <div className='grid-shape'>
                {card.map(ca => {
                    return (<>
                        <Cardimg card={ca}
                        handleclick={handleclick}
                        disable={disable}
                        flipped={ca === firstchoice || ca === secondchoice || ca.matched}/>
                    </>)
                })}
            </div>
            <p>step{counter}</p>
        </>
    )
}
