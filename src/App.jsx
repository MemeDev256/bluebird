import "./App.css";
import bluebirdLogo from "./assets/bluebird.png";
import banner from "./assets/bluebirdbanner.png";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Bluebird Memecoin</h1>
      </header>
      <main>
        <div className="logo-container">
          <img
            src={bluebirdLogo}
            alt="Bluebird Logo"
            className="logo animated-logo"
          />
        </div>
        <section className="card">
          <h2>Welcome to Bluebird</h2>
          <p>
            The meme coin for the next generation of crypto enthusiasts. Address
            is GzAWwhy3fJLqtCu8uR5xAojtC45KLTRD63CjunZ8moon
            <br />
            Join the flock, spread your wings, and let’s fly to the moon
            together!
          </p>
          <ul>
            <li>Community-driven and fun</li>
            <li>Fair launch, no presale</li>
            <li>100% meme utility</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Bluebird Memecoin. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
