import "./index.css";

import { Link } from "react-router-dom";

import Header from "../../components/header";
import NavBar from "../../components/navBar";

export default function About() {
  return (
    <>
      <Header headerTitle="About" />
      <div className="card">
        <img src="/ga.png" alt="Giuseppe Anzalone" className="image__card" />
        <h3>Giuseppe Anzalone</h3>
        <h4>Jr Full Stack Developer</h4>
        <p>
          Dopo anni di esperienza nella gestione di un e-commerce ho deciso di
          approcciarmi al mondo dello sviluppo web, per il quale ho sempre
          nutrito una forte passione. Sono convinto che alla base del successo
          ci sia la formazione continua, motivo per cui ho intrapreso questo
          viaggio nel coding bootcamp di Edgemony.
        </p>
        <div className="social__logo">
          <a href="https://github.com/giuseppeAnzalone" target="_blank">
            <img src="/github-logo.png" alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/giuseppe-anzalone-web-dev/"
            target="_blank"
          >
            <img src="/linkedin-logo.jpg" alt="linkedin logo" />
          </a>
        </div>
      </div>
      <NavBar />
    </>
  );
}
