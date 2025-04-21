import QueryWords from './components/QueryWords';
import './App.css';
import isMobile from "./utils/IsMobile.js";

const mobile = isMobile();

function App() {
    return (
        <div className="App">
            <div className={mobile ? "Mobile-app-header" : "App-header"}>
                <h1>Wordle Bot Search</h1>
                <div className={mobile ? "Mobile-app-subtitle" : "App-subtitle"}>
                    Use CRANE as your first word, and enter the result as a five letter string with G for green letters, Y for yellow letters, and X for gray letters (not case sensitive).
                    The search will tell you what to use as your second word!
                </div>
            </div>
            <QueryWords />
        </div>
    );
}

export default App;