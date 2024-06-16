
function ProjectSection({thumbNail}) {
    return (
        <div className="sp-content sp-flex-column sp-project-section">
        <img src={thumbNail} alt="" className="project-thumbnail" />
        <h3>How I designed an AI tool to transform test creation from days to minutes</h3>
        <p>An AI tool allows users to generate comprehensive test assessments for various skills in minutes, eliminating the need for days of manual effort.</p>
        <div className="tag-list sp-flex sp-flex-row">
            <div className="sp-tag-name">
                HR tech
            </div>
            <div className="sp-tag-name">
                Web
            </div>
            <div className="sp-tag-name">
                AI
            </div>
        </div>
      </div>
    );
  }
  
  export default ProjectSection;