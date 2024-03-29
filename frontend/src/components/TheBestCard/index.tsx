import { Moment } from 'types/Moment';
import { GoCalendar } from 'react-icons/go';
import './styles.css';

type Props = {
    moment : Moment;
}

const TheBestCard = ({moment} : Props) => {

    return(
        <div className='base-card the-best-card-container'>
            <div className='the-best-card-content-container'>
                <h1>
                    <i style={{marginRight:"10px"}}>
                        <GoCalendar/>
                    </i>
                    {moment.title}
                </h1>
            </div>
            <div className='the-best-card-image-container'>
                <img src={moment.imgUrl} alt={moment.title} />
            </div>
            <div className='the-best-card-description-container'>
                <p>#{moment.description}</p>
                <h2>{moment.date}</h2>
            </div>
        </div>
    );
}

export default TheBestCard;