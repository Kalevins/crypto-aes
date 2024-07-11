import { useState } from 'react'
import { encrypter, unfolder } from './libraries/cryptoMethods'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [crypt, setCrypt] = useState("crypt")
  const [key, setKey] = useState(import.meta.env.VITE_CRYPTO_KEY)

  const handleCrypt = () => {
    const data = encrypter(input, key)
    setOutput(data)
  }

  const handleDecrypt = () => {
    const data = unfolder(input, key)
    if (typeof data === 'object') {
      setOutput(JSON.stringify(data))
    } else {
      setOutput(data)
    }
  }

  const handleInputKey = (e) => {
    setKey(e.target.value)
  }

  const handleInput = (e) => {
    let text = e.target.value
    if(text[0] === "'" && text[text.length - 1] === "'" || text[0] === '"' && text[text.length - 1] === '"') {
      text = text.slice(1, text.length - 1)
    }
    setInput(text)
  }

  const handleCryptChange = (e) => {
    setCrypt(e.target.value)
  }

  return (
    <>
      <h1>Crypt AES</h1>
      <div className="card">

        <div className="check">
          <label htmlFor="crypt" >
            <input
              type="radio"
              name="crypt"
              id="crypt"
              value={"crypt"}
              defaultChecked
              onChange={handleCryptChange}
            />
            <span>Crypt</span>
          </label>

          <label htmlFor="decrypt" >
            <input
              type="radio"
              name="crypt"
              id="decrypt"
              value={"decrypt"}
              onChange={handleCryptChange}
            />
            <span>Decrypt</span>
          </label>
        </div>

        <div className="input">
        <label htmlFor="input">Key</label>
          <input
            name="input"
            id="input"
            cols="30"
            rows="10"
            value={key}
            onChange={handleInputKey}
          ></input>

          <label htmlFor="input">Input</label>
          <textarea
            name="input"
            id="input"
            cols="30"
            rows="10"
            value={input}
            onChange={handleInput}
          ></textarea>

          <label htmlFor="output">Output</label>
          <textarea
            name="output"
            id="output"
            cols="30"
            rows="10"
            value={output}
            readOnly
          ></textarea>

          <button
            className="btn"
            onClick={crypt === 'crypt' ? handleCrypt : handleDecrypt}
          >
            {crypt === 'crypt' ? 'Crypt' : 'Decrypt'}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
