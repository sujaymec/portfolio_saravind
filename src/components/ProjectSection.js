
function ProjectSection({thumbNail, icon_array, heading, text}) {
    return (
        <div className="sp-content sp-flex-column sp-project-section">
        <img src={thumbNail} alt="" className="project-thumbnail" />
        <h3>{heading}</h3>
        <p>{text}</p>
        <div className="tag-list sp-flex sp-flex-row">
            <div className="sp-tag-name">
                <span><img src={icon_array[0]} alt="" />HR tech</span>
            </div>
            <div className="sp-tag-name">
                <span><img src={icon_array[1]} alt="" />Web</span>
            </div>
            <div className="sp-tag-name">
                <span><img src={icon_array[2]} alt="" />AI</span>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProjectSection;