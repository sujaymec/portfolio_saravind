// Calling the JSON here would make it an imppure function

import icon_briefcase from './img/icon_briefcase.svg'
import icon_devices from './img/icon_devices.svg'
import icon_steps from './img/icon_steps.svg'

function ProjectSection({thumbNail, heading, url, text, tags}) {
    const icon_object = {
        "HR Tech": icon_briefcase,
        "Fintech": icon_briefcase,
        "Web": icon_devices,
        "Mobile": icon_devices,
        "AI": icon_steps,
        "PLG": icon_steps,
        "Build for bharat": icon_steps
    }
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (
        <div className="sp-content sp-flex-column sp-project-section" onClick={() => openInNewTab(url)}>
        <img src={thumbNail} alt="" className="project-thumbnail" />
        <h3>{heading}</h3>
        <p>{text}</p>
        <div className="tag-list sp-flex sp-flex-row">
            <div className="sp-tag-name">
                <span><img src={icon_object[tags[0]]} alt="" />{tags[0]}</span>
            </div>
            <div className="sp-tag-name">
                <span><img src={icon_object[tags[1]]} alt="" />{tags[1]}</span>
            </div>
            <div className="sp-tag-name">
                <span><img src={icon_object[tags[2]]} alt="" />{tags[2]}</span>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProjectSection;