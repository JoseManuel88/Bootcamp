
import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { More } from "./components/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;
function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <h1>CURRICULUM</h1>
        <Hero hero={hero} />
        <About aboutMe={hero.aboutMe} />
        <button
              className ="button"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className ="button2"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
        <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
        
	      <More
	        languages={languages}
	        habilities={habilities}
	        volunteer={volunteer}
	      />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       
//     </div>
//   );
// }

// export default App;
