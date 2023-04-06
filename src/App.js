import EducationCard from "./components/EducationCard"
import "./styles/App.css"

export default function App() {
    return (
        <>
            <h1>CV App</h1>
            <div className="contact section"></div>
            <div className="work-experience section"></div>
            <div className="education section">
                <EducationCard />
            </div>
        </>
    )
}
