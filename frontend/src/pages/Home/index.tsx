import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
    return (
        <>
            <div className="base-card main-container">

                <div className="image-container">
                    <img src="https://talken.com.br/wp-content/uploads/2018/01/colegio_sagrado.jpg" alt="logosagrado" />
                </div>

                <div className="content-container">
                    <h1>Terceirão 2016</h1>
                    <p>A resume of 1999's class</p>

                    <Link to="/students">
                        <button className='btn btn-primary'>Students</button>
                    </Link>
                </div>

                

            </div>
            
            
        </>
    );
}

export default Home;
