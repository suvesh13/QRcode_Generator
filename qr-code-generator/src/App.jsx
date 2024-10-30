import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import {
  appStyle,
  inputStyle,
  rowStyle,
  rowContainerStyle,
  qrStyles,
  boxStyles,
  innerBoxStyles
} from "./styles/Styles.jsx"

function App() {
  const [temp, setTemp] = useState("")
  const [word, setWord] = useState("Ethos Typos")
  const [size, setSize] = useState(100)
  const [bgColor, setBgColor] = useState("ffffff")
  const [qrCode, setQrcode] = useState("")

  useEffect(() => {
    setQrcode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`
    )
  }, [word, size, bgColor])

  function handleClick() {
    setWord(temp)
  }

  const handleColorChange = (e) => {
    setBgColor(e.target.value.slice(1)) // Remove the # from the color value
  }

  const handleTextChange = (e) => {
    setTemp(e.target.value)
  }

  const handleDimensionChange = (e) => {
    setSize(e.target.value)
  }

  return (
    <div style={appStyle}>
      <h3>QR Code Generator</h3>
      <div>
        <div>
          <Input 
            style={inputStyle}
            type="text" 
            placeholder='Enter text to encode'
            onChange={handleTextChange}
          />
          <Button text="Generate" onClick={handleClick} />
        </div>
        <div style={rowContainerStyle}>
          <div style={rowStyle}>
            <h5>Background Color:</h5>
            <div style={boxStyles}>
              <div style={innerBoxStyles}>
                <Input
                  type="color"
                  defaultValue="#ffffff"
                  onChange={handleColorChange}
                />
              </div>
            </div>
            <h5>{`#${bgColor}`}</h5>
          </div>
          <div style={rowStyle}>
            <h5>Dimension:</h5>
            <input 
              type="range"
              min="200"
              max="300"
              value={size}
              style={{
                width: "100px",
                accentColor: "#cf505f"
              }}
              onChange={handleDimensionChange}
            />
            <h5>
              {size}px x {size}px
            </h5>
          </div>
        </div>
      </div>
      <div>
        <img
          style={{
            ...qrStyles,
            backgroundColor: `#${bgColor}30`
          }}
          src={qrCode}
          alt="Generated QR Code"
        />
      </div>
      <a href={qrCode} download="QRCode">
        <Button text="Download" type="button" />
      </a>
    </div>
  )
}

export default App
