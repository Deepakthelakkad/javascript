import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sampleData = [
  {
    "name": "Adeel Solangi",
    "language": "Sindhi",
    "id": "V59OF92YF627HFY0",
    "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
    "version": 6.1
  },
  {
    "name": "Afzal Ghaffar",
    "language": "Sindhi",
    "id": "ENTOCR13RSCLZ6KU",
    "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    "version": 1.88
  },
  {
    "name": "Aamir Solangi",
    "language": "Sindhi",
    "id": "IAKPO3R4761JDRVG",
    "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
    "version": 7.27
  },
  {
    "name": "Abla Dilmurat",
    "language": "Uyghur",
    "id": "5ZVOEPMJUI4MB4EN",
    "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
    "version": 2.53
  }]
  const filteredData = sampleData.filter(i => i.language === "Sindhi");
  return (
    <>
      {
        <div>
        {sampleData.length}
        <br />
        {filteredData.length}
        {filteredData.map((i) => (
          <ul key={i.id} className="" style={{ width: "30%" }}>
            <li>name: {i.name}</li>
            <li>language: {i.language}</li>
            <li>id: {i.id}</li>
            <li>bio: {i.bio}</li>
            <li>version: {i.version}</li>
          </ul>
        ))}
      </div>
      }
    </>
  )
}

export default App
