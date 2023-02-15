import { AxiosRequestConfig } from "axios";
import TheBestCard from "components/TheBestCard";
import { useEffect, useState } from "react";
import { Moment } from "types/Moment";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";

import "./styles.css";

const TheBest = () => {
  const [page, setPage] = useState<SpringPage<Moment>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: "/moments",
      params: {
        page: 0,
        size: 50,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  const handleBackToTheTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="the-best-page-container">
      <div className="the-best-page-content-container">
        <>
        {page?.content.map((moment) => (
            <div key={moment.id}>
              <TheBestCard moment={moment} />
            </div>
          ))}
        </>
      </div>

      <button onClick={handleBackToTheTop} className="btn btn-primary">
        Back to the top
      </button>
    </div>
  );
};

export default TheBest;
