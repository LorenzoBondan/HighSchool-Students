import './styles.css';

const GraduationVideo = () => {
    return(
        <div className="graduation-video-container">
            <div className="base-card graduation-video-card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Pr5r9dZ8VqI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    );
}

export default GraduationVideo;