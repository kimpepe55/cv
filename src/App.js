import Intro from "./sections/intro/Intro.jsx";
import data from "./data/cv.json";
import About from "./sections/about/About.jsx";

function App() {
    return (
        <div>
            <Intro data={data.intro} />
            <About data={data.about} />
        </div>
    );
}

export default App;
