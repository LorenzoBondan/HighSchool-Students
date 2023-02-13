import {useEffect, useState} from 'react';
import partyBackground from 'assets/images/party-background.jpg';
import boneless  from 'assets/videos/party-music.mp4';
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
            <div className='coutn-down-container'>
                <video 
                autoPlay
                loop
                //muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}
                src={boneless}>

                </video>
            
            <div className='base-card count-down-page-container'style={{backgroundImage: `url(${partyBackground})`,
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundSize: "cover",
                                                            }}>

                <div className='count-down-page-title'>
                    <h1>Countdown to Isabel's party of the 7 years later!</h1>
                    <p className='text-secondary'>Where we'll see who got successed and who failed in life</p>
                    
                </div>

                <div className='count-down-page-emojis'>
                    <img src="https://em-content.zobj.net/thumbs/160/apple/325/partying-face_1f973.png" alt="" />
                    <img src="https://em-content.zobj.net/thumbs/160/apple/325/party-popper_1f389.png" alt="" />
                </div>

                <div className='count-down-page-clock-container'>
                    <Clock timerDays={timerDay} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
                </div>
                
            </div>
            </div>
            
        </>
    );
}

export default CountDown;