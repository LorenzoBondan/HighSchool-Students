import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Course } from "types/course";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import CourseCrudCard from "../CourseCrudCard";

const List = () => {

    const [page, setPage] = useState<SpringPage<Course>>();

    const getCourses = () => {
        const params : AxiosRequestConfig = {
            url: '/courses',
            withCredentials: true,
            params: {
              page: 0,
              size: 50,
            },
          };
      
          requestBackend(params).then((response) => {
            setPage(response.data);
          });
    }

    useEffect(() => {
        getCourses();
    }, []);

    return(
        <div className='students-crud-container'>
            <div className="student-crud-bar-container">
                <Link to="/admin/courses/create">
                    <button className="btn btn-primary btn-crud-add">
                        ADD
                    </button>
                </Link>
            </div>
            <div className='row'>
                {page?.content
                    .sort( (a,b) => a.name > b.name ? 1 : -1)
                    .map((item) => (
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={item.id}>
                            <CourseCrudCard course={item} onDelete={() => getCourses()}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default List;