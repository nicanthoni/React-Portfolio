import Resume from "../../assets/NicDiaz-Resume.pdf";
import { MdFileDownload } from "react-icons/md";

export default function ResumeComponent() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "NicDiaz-Resume.pdf";
    link.click();
  };

  return (
    <div className="resume">
      <div className="header-btn-container">
        <h2>Resume</h2>
        <button className="download-btn" onClick={handleDownload}>
          <MdFileDownload 
          className="download-icon"
          />
        </button>
      </div>

      <div className="proficiencies-container">
        <div className="proficiencies-section">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap, Tailwind</li>
          </ul>
        </div>

        <div className="proficiencies-section">
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
