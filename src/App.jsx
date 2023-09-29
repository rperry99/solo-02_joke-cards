import Joke from './Joke.jsx';
import jokesList from './jokeList.js';
import './App.css';

function App() {
  const jokeElements = jokesList.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <>
      <header>
        <h1>Poke-Puns!</h1>
      </header>
      <section className="joke-container">{jokeElements}</section>
      <footer>
        <p>
          Jokes courtesy of ScaryMommy over at &nbsp;
          <a href="https://www.scarymommy.com/pokemon-puns-jokes">
            scarymommy.com
          </a>
        </p>
        .
      </footer>
    </>
  );
}

export default App;

/*
Challenge:

- Render 4-5 <Joke/> components.
- Each joke should take a "setup" prop, and a "punchline" prop.

Extra Credit:

- Use some jokes, that are only a punchline, and no setup, like "It's hard to explain puns to kleptomaniacs because they always take things literally"
*/
