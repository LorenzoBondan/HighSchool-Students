import { AxiosRequestConfig } from "axios";
import DiaryCard from "components/DiaryCard";
import { useEffect, useState } from "react";
import { Diary } from "types/diary";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";

import './styles.css';

const DiaryPage = () => {

    const [page, setPage] = useState<SpringPage<Diary>>();

    useEffect(() => {
        const params : AxiosRequestConfig = {
          url: '/diaries',
          params: {
            page: 0,
            size: 120,
          },
        };
    
        requestBackend(params).then((response) => {
          setPage(response.data);
        });
      }, []);

    return(
       <div className='diary-main-page-container'>
            <h1>2016</h1>

            {page?.content.map((item) => (
                <div>
                    <DiaryCard diary={item}/>
                </div>
            ))}
            
       </div>
    );
}

export default DiaryPage;