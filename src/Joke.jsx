function Joke(props) {
  return (
    <>
      <div className="joke-card">
        {props.setup && <p className="setup">{props.setup}</p>}
        <p className="punchline">{props.punchline}</p>
      </div>
    </>
  );
}

export default Joke;
