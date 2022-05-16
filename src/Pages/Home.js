import React, { Component } from "react";
import '../App.css';
import projects from "../projects.json";
import About from '../components/About/About';
import Portfolio from '../components/Portfolio'
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import { Table } from "react-bootstrap";

class App extends Component {


  render() {
    return (
      <main>
        <div className="App">
          <div className='About'>
            <About />
          </div>
          <div className='Projects'>
            <Header
              header="Featured Projects"
            />

            <Wrapper>
              <Portfolio
                key={projects[0].id}
                id={projects[0].id}
                picture={projects[0].image}
                name={projects[0].name}
                description={projects[0].description}
                skill={projects[0].skill}
                github={projects[0].github}
                site={projects[0].site}
              />

              <Portfolio
                key={projects[1].id}
                id={projects[1].id}
                picture={projects[1].image}
                name={projects[1].name}
                description={projects[1].description}
                skill={projects[1].skill}
                github={projects[1].github}
                site={projects[1].site}
              />
            </Wrapper>

            <div className="buttonWrapper">
              <button
                type="submit"
                id="portfolioButton"
                className="profile btn-lg"
                onClick={(event) => (window.location.href = "/portfolio")}
              >
                SEE FULL PORTFOLIO
          </button>
            </div>
          </div>
        </div>
        <div className='Skills'>
          <Header
            header="Skills"
          />

          <Table hover size="sm">
            <tbody>
              <tr>
                <td>HTML</td>
                <td>CSS</td>
                <td>JavaScript</td>
                <td>jQuery</td>
              </tr>
              <tr>
                <td>Bootstrap</td>
                <td>Express.js</td>
                <td>React.js</td>
                <td>Node.js</td>
              </tr>
              <tr>
                <td>MongoDB</td>
                <td>MySql</td>
                <td>NoSQL</td>
                <td>Emotion</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </main>
    );
  }
}
export default App;
