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
                                                                
                <div className="image-container">
                    <img src={logoSagrado} alt="logosagrado" />
                    <img src={logoTerceirao} alt="logo" />
                    
                </div>

                <div className="content-container">
                    <h1>Terceirão 2016</h1>
                    <p>A resume of the 1999's class</p>

                    <Link to="/students">
                        <button className='btn btn-primary'>Students</button>
                    </Link>
                </div>

            </div>
            
        </>
    );
}

export default Home;
