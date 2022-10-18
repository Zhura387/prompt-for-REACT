import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Component from './component/Component';
import FirstPage from './firstPage/FirstPage';
import Props from './props/Props';
import Events from './events/Events';
import Rendering from './rendering/Rendering';
import Keys from './keys/Keys';
import State from './state/State';
import Effect from './effect/Effect';


function App() {

  const [isAdd, setIsAdd] = React.useState(false);
  const added = () => {
    if (isAdd) {
      setIsAdd(!isAdd)
    } else {
      setIsAdd(!isAdd)
    }
  }

  return (
    <div className="App">
      <header >
        <div className=' hed'>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="52" fill="#F93CC4" />
            <path d="M23.172 14.196V16.968L10.896 36.084H23.172L22.776 39H7.08V36.264L19.464 17.076H8.376V14.196H23.172ZM37.1566 19.596C38.8846 19.596 40.2286 20.112 41.1886 21.144C42.1726 22.176 42.6646 23.592 42.6646 25.392V39H39.3526V25.86C39.3526 24.516 39.0886 23.568 38.5606 23.016C38.0566 22.464 37.3126 22.188 36.3286 22.188C35.3446 22.188 34.4686 22.476 33.7006 23.052C32.9326 23.628 32.2126 24.444 31.5406 25.5V39H28.2286V12.432L31.5406 12.072V22.656C33.0286 20.616 34.9006 19.596 37.1566 19.596Z" fill="black" />
          </svg>
          <p>prompt</p>
          <img src='/1.png' alt='logoReact.png' />
        </div>
      </header>

      <div className="content">
        <div className="list">
          <span><Link to="/">Home</Link></span>
          <span> <Link to="/Component">Components</Link></span>
          <span> <Link to="/Props">Props</Link></span>
          <span> <Link to="/Events">Events</Link></span>
          <span> <Link to="/Rendering">Rendering</Link></span>
          <span> <Link to="/Keys">Keys</Link></span>
          <span onClick={() => added()}>{isAdd ? <Link className='spa' to="/State">State</Link> : 'hook'}{isAdd ? <Link to="/Effect">Effect</Link> : ''}</span>
        </div>
        <div className="contentBody">
          <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/Component' element={<Component />} />
            <Route path='/Props' element={<Props />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/Rendering' element={<Rendering />} />
            <Route path='/Keys' element={<Keys />} />
            <Route path='/State' element={<State />} />
            <Route path='/Effect' element={<Effect />} />
            <Route path='*' element={<FirstPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
