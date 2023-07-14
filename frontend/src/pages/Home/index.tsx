import { Link } from 'react-router-dom';
import background from 'assets/images/turma.jpg';
import logoTerceirao from 'assets/images/logo-terceirao.png';
import logoSagrado from 'assets/images/logo-sagrado.png';
import { FaUsers, FaTrophy } from 'react-icons/fa';
import { BsFillJournalBookmarkFill  } from 'react-icons/bs';
import { TfiAlarmClock } from 'react-icons/tfi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { AiFillYoutube } from 'react-icons/ai';
import './styles.css';

function Home() {
    return (
            <div className="base-card main-container"  style={{backgroundImage: `url(${background})`,
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundSize: "cover",
                                                            }}>                                    
                <div className="content-container">
                    <div className='content-container-logo'>
                        <img src={logoTerceirao} alt="" />
                    </div>
                    <p>The Class of 1999</p>
                    <Link to="/students">
                        <button className='btn btn-primary'>
                            <i style={{
                                marginRight:"8px",
                                }}>
                                <FaUsers/>
                            </i>
                            Students
                        </button>
                    </Link>
                    <Link to="/thebest">
                        <button className='btn btn-primary btn-content-container'>
                        <i style={{
                                marginRight:"8px",
                                }}>
                                <FaTrophy/>
                            </i>
                            The best of the year</button>
                    </Link>
                    <Link to="/diary">
                        <button className='btn btn-primary'>
                            <i style={{
                                marginRight:"8px",
                                }}>
                                <BsFillJournalBookmarkFill/>
                            </i>
                            The author's diary
                        </button>
                    </Link>
                    <Link to="/countdown">
                        <button className='btn btn-primary'>
                            <i style={{
                                marginRight:"8px",
                                }}>
                                <TfiAlarmClock/>
                            </i>
                            Countdown to Isabel's party
                        </button>
                    </Link>
                    <Link to="/graduationvideo">
                        <button className='btn btn-primary'>
                            <i style={{
                                marginRight:"8px",
                                }}>
                                <AiFillYoutube/>
                            </i>
                            Graduation Video
                        </button>
                    </Link>
                    <Link to="/admin">
                        <button className='btn btn-primary'>
                            <i style={{
                                marginRight:"8px",
                                }}>
                                <MdAdminPanelSettings/>
                            </i>
                            ADMIN
                        </button>
                    </Link>
                </div>
                <div className="image-container">
                    <img src={logoSagrado} alt="logosagrado" />
                </div>
            </div>
    );
}

export default Home;
