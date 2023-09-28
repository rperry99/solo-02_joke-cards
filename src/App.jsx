import Joke from './Joke.jsx';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Poke-Puns!</h1>
      </header>
      <section className="joke-container">
        <Joke
          setup="What do you call a Pikachu that can fix computers?"
          punchline="Geek-achu."
        />
        <Joke
          setup="Why can’t you blindfold a Pokémon?"
          punchline="Because it’s going to Pikachu!"
        />
        <Joke
          setup="What’s the name of the Pokémon that traveled with Dorothy to Oz?"
          punchline="Totodile."
        />
        <Joke
          setup="Which Pokémon could also be a pirate?"
          punchline="Arrrrrr-bok."
        />
        <Joke
          setup="I asked my dad why a grown man would play Pokémon Go?"
          punchline="He said “Wynaut.”"
        />
        <Joke punchline="I'm so sorry about these bad puns... I should've kept my big meowth shut." />
      </section>
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
