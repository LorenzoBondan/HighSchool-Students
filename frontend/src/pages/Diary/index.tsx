
import { Link } from 'react-router-dom';
import './styles.css';

const Diary = () => {
    return(
       <div className='diary-page-container'>
            <div className='base-card diary-page-buttons-container'>
                <h1 className='text-primary'>Select the year</h1>

                <Link to='/diary/2016'>
                    <button className='btn btn-primary'>2016</button>
                </Link>
                
                <Link to='/diary/2015'>
                    <button className='btn btn-primary'>2015</button>
                </Link>
                
                
            </div>
       </div>
    );
}

export default Diary;