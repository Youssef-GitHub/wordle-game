import { useState } from "react";

function useWordle(solution) {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        
    }

    const addNewGuess = () => {

    }

    const handleKeyUp = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}

}

export default useWordle;