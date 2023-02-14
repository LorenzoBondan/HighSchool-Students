import { Link } from 'react-router-dom';
import './styles.css';
import background from 'assets/images/turma.jpg';
import logoTerceirao from 'assets/images/logo-terceirao.png';
import logoSagrado from 'assets/images/logo-sagrado.png';

function Home() {
    return (
        <>
            <div className="base-card main-container"  style={{backgroundImage: `url(${background})`,
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundSize: "cover",
                                                            }}>
                                                                
                <div className="content-container">
                    <h1>Terceirão 2016</h1>
                    <p>A summary of the class of 1999</p>

                    <Link to="/students">
                        <button className='btn btn-primary'>Students</button>
                    </Link>

                    <Link to="/students">
                        <button className='btn btn-primary'>The best of the year</button>
                    </Link>

                    <Link to="/students">
                        <button className='btn btn-primary'>Unsolved Mysteries</button>
                    </Link>

                    <Link to="/countdown">
                        <button className='btn btn-primary'>Countdown to Isabel's party</button>
                    </Link>

                    <Link to="/admin">
                        <button className='btn btn-primary'>ADMIN</button>
                    </Link>


                </div>

                
                <div className="image-container">
                    <img src={logoSagrado} alt="logosagrado" />
                    <img src={logoTerceirao} alt="logo" />
                </div>

                

            </div>
            
        </>
    );
}

export default Home;
