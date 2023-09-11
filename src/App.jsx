import { useState } from 'react'
import { encrypter, unfolder } from './libraries/cryptoMethods'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [crypt, setCrypt] = useState("crypt")

  const handleCrypt = () => {
    const data = encrypter(input, import.meta.env.VITE_CRYPTO_KEY)
    setOutput(data)
  }

  const handleDecrypt = () => {
    const data = unfolder(input, import.meta.env.VITE_CRYPTO_KEY)
    if (typeof data === 'object') {
      setOutput(JSON.stringify(data))
    } else {
      setOutput(data)
    }
    console.log('output', output)
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleCryptChange = (e) => {
    setCrypt(e.target.value)
  }

  return (
    <>
      <h1>Crypt and Decrypt</h1>
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
          <label htmlFor="input">Input</label>
          <textarea
            name="input"
            id="input"
            cols="30"
            rows="10"
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
            Go
          </button>
        </div>
      </div>
    </>
  )
}

export default App
