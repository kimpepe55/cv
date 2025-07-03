import Intro from "./sections/intro/Intro.jsx";
import data from "./data/cv.json";
import About from "./sections/about/About.jsx";
import Education from "./sections/education/Education.jsx";
import Employment from "./sections/employment/Empoyment.jsx";

function App() {
    return (
        <div>
            <Intro data={data.intro} />
            <About data={data.about} />
            <Education data={data} />
            <Employment data={data} />
        </div>
    );
}

export default App;
