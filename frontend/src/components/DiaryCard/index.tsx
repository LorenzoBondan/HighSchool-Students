
import { Diary } from 'types/diary';
import './styles.css';

type Props = {
    diary : Diary;
}

const DiaryCard = ( {diary} : Props) => {
    return(
        <div className='base-card diary-card-container'>
            <div className='diary-card-description-container'>
                <p className='text-secondary'>{diary.description}</p>
            </div>

            <div className='diary-card-date-container'>
                <h2 className='text-primary'>{diary.date}</h2>
                <h3 className='text-primary'>#{diary.year}</h3>
            </div>
        </div>
    );
}

export default DiaryCard;