import React, { useState, useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './grid'
import KeyPad from './keyPad'
import Modal from './modal'

function Wordle({ solution }) {

    const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if (isCorrect) {
            setTimeout(() => (setShowModal(true)), 1500)
            window.removeEventListener('keyup', handleKeyUp)
        }
        
        if (turn > 5) {
            setTimeout(() => (setShowModal(true)), 1500)
            window.removeEventListener('keyup', handleKeyUp)
        }

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])

    return (<>
        {/* <div>solution - {solution}</div>
        <div>current guess - {currentGuess}</div> */}
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <KeyPad usedKeys={usedKeys} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </>);
}

export default Wordle;