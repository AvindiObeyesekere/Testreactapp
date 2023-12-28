import React from 'react';
import grinningFaceImage from './grinningface.png';
import dancingGirlImage from './dancingwomen.png';

function App() {
  const greeting = "greeting";

  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>

   

      <ul>
        <li>
          <button>
            <span role="img" aria-label="grinning face" id="g"></span>
            <img src={grinningFaceImage} alt="Grinning Face" style={{ width: '30px', height: '30px' }} />
          </button>
        </li>
        <li>
          <button>
            <span role="img" aria-label="party popper" id="party-popper"></span>
            <img src={grinningFaceImage} alt="Party Popper" style={{ width: '30px', height: '30px' }} />
          </button>
        </li>
        <li>
          <button>
            <span role="img" aria-label="woman dancing" id="woman-dancing"></span>
            <img src={dancingGirlImage} alt="Woman Dancing" style={{ width: '30px', height: '30px' }} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
