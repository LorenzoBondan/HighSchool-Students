import {Fragment} from 'react';
import './styles.css';

type Props = {
    timerDays: number | undefined;
    timerHours: number | undefined;
    timerMinutes: number | undefined;
    timerSeconds: number | undefined;
}

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds} : Props) => {
    return<Fragment>
        <section className='timer-container'>
            <section className='timer'>
                <div className='clock'>
                    <section>
                        <p>{timerDays}</p>
                        <small>Days</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <small>Hours</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <small>Minutes</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <small>Seconds</small>
                    </section>
                </div>
            </section>
        </section>
    </Fragment>;
}

export default Clock;