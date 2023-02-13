import {useEffect, useState} from 'react';

import Clock from 'components/Clock';
import './styles.css';

const CountDown = () => {

    const [timerDay, setTimerDays] = useState<number>();
    const [timerHours, setTimerHours] = useState<number>();
    const [timerMinutes, setTimerMinutes] = useState<number>();
    const [timerSeconds, setTimerSeconds] = useState<number>();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("December 18 ,2023").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            let distance = 0;
            let days = 0;
            if(countDownDate > now){
                distance = countDownDate - now; 
                days = Math.floor(distance / (24 * 60 * 60 * 1000));
            } 
            else{
                distance = now - countDownDate; 
                days = Math.floor((-1) * distance / (24 * 60 * 60 * 1000));
            }

            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
            const seconds = Math.floor(distance % (60 * 1000) / (1000));

            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);

        })
    }

    useEffect(() => {
        startTimer();
    })

    return(
        <>
            <div className='base-card count-down-page-container'>

                <div className='count-down-page-title'>
                    <h1 className='text-primary'>Count down to Isabel's party of the 7 years later!</h1>
                    <p className='text-secondary'>Where we'll se who got successed and who fracassed in life</p>
                    
                </div>

                <div className='count-down-page-emojis'>
                    <img src="https://em-content.zobj.net/thumbs/160/apple/325/partying-face_1f973.png" alt="" />
                    <img src="https://em-content.zobj.net/thumbs/160/apple/325/party-popper_1f389.png" alt="" />
                </div>

                <div className='count-down-page-clock-container'>
                    <Clock timerDays={timerDay} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
                </div>
                
            </div>
            
        </>
    );
}

export default CountDown;