
import { AxiosRequestConfig } from 'axios';
import TheBestCard from 'components/TheBestCard';
import { useEffect, useState } from 'react';
import { Moment } from 'types/Moment';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import './styles.css';

const TheBest = () => {

    const [page, setPage] = useState<SpringPage<Moment>>();

    useEffect(() => {
        const params : AxiosRequestConfig = {
            url: '/moments',
            params: {
              page: 0,
              size: 50,
            },
          };
      
          requestBackend(params).then((response) => {
            setPage(response.data);
          });
      }, []);

    return(
        <div className='the-best-page-container'>
            <div className='the-best-page-top-container'>
                <h1>The best moments of the year</h1>
            </div>

            <div className='the-best-page-content-container'>
                {page?.content.map((moment) => (
                    <div>
                        <TheBestCard moment={moment}/>
                    </div>
                ))}
            </div>
            
        </div>

    );
}

export default TheBest;