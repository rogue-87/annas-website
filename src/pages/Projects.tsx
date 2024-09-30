import githubIconPath from "../assets/projects/github.png"
import itchIOIconPath from "../assets/projects/itch_io.png"
import replitIconPath from "../assets/projects/replit.jpg"
import ImageButton from "../components/ImageButton"

import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects">
        <h1 className="project-text">You can find all of my projects on</h1>

        <div className="project-platform-container">
            <ImageButton imageStyle="project-platform" filePath={githubIconPath} width={128} height={128} onClick={() => window.open("https://github.com/annasajkh")} />
            <ImageButton imageStyle="project-platform" filePath={itchIOIconPath} width={128} height={128} onClick={() => window.open("https://annasjk.itch.io")} />
            <ImageButton imageStyle="project-platform" filePath={replitIconPath} width={128} height={128} onClick={() => window.open("https://replit.com/@AnnasVirtual")} />
        </div>
    </div>
  )
}