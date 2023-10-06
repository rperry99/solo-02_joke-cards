import { useState } from 'react';

function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <>
      <div className="joke-card">
        {props.setup && <p className="setup">{props.setup}</p>}
        {isShown && <p className="punchline">{props.punchline}</p>}
        <button className="show-punchline" onClick={toggleShown}>
          Toggle Punchline
        </button>
      </div>
    </>
  );
}

export default Joke;
