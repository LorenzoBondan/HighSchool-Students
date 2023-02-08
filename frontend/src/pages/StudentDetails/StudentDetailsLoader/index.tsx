import React from "react"
import ContentLoader from "react-content-loader"
import './styles.css';

const StudentDetailsLoader = () => (
<div className="student-loader-container">
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <circle cx="52" cy="92" r="41" /> 
    <rect x="113" y="49" rx="2" ry="2" width="140" height="83" /> 
    <rect x="10" y="144" rx="2" ry="2" width="88" height="53" /> 
    <rect x="113" y="140" rx="2" ry="2" width="140" height="58" />
    
  </ContentLoader>
  </div>
)

export default StudentDetailsLoader;