const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('Ewan');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length -1] === value[0]){
            setResult('correct');
            setWord(value);
            setValue('');
        }else {
            setResult('Wrong');
            setValue('');
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">Please input word</label>
                <input className="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>click!!!!!!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;