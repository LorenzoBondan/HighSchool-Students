import { AxiosRequestConfig } from "axios";
import DiaryCard from "components/DiaryCard";
import { useEffect, useState } from "react";
import { Diary } from "types/diary";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";

import './styles.css';

const DiaryPage = () => {

    const [page, setPage] = useState<SpringPage<Diary>>();

    const beginWithThisYear = () => {
        const params : AxiosRequestConfig = {
            url: '/diaries',
            params: {
              page: 0,
              size: 119,
            },
          };
      
          requestBackend(params).then((response) => {
            setPage(response.data);
          });
    }

    useEffect(() => {
        beginWithThisYear();
      }, []);

      const handleChangeYear = () => {

            const params : AxiosRequestConfig = {
              url: '/diaries',
              params: {
                page: 1,
                size: 119,
              },
            };
        
            requestBackend(params).then((response) => {
              setPage(response.data);
            });

      }

    return(
       <div className='diary-main-page-container'>
            <div className="diary-main-page-buttons-container">
                <button onClick={beginWithThisYear} className="btn btn-primary">2016</button>
                <button onClick={handleChangeYear} className="btn btn-primary">2015</button>
            </div>
            
            {page?.content.map((item) => (
                <div key={item.id}>
                    <DiaryCard diary={item}/>
                </div>
            ))}
            
       </div>
    );
}

export default DiaryPage;