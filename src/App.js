import Intro from "./sections/intro/Intro.jsx";
import data from "./data/cv.json";

function App() {
    return (
        <div>
            <Intro data={data.intro} />
        </div>
    );
}

export default App;
