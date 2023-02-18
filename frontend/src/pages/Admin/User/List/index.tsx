import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "types/user";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import UserCrudCard from "../UserCrudCard";

const List = () => {

    const [page, setPage] = useState<SpringPage<User>>();

    const getUsers = () => {
        const params : AxiosRequestConfig = {
            url: '/users',
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
        getUsers();
    }, []);


    return(
        <div className='students-crud-container'>

        <div className="student-crud-bar-container">

            <Link to="/admin/users/create">
                <button className="btn btn-primary btn-crud-add">
                    ADD
                </button>
            </Link>
            
        </div>

        <div className='row'>
            {page?.content
                .sort( (a,b) => a.name > b.name ? 1 : -1)
                .map((item) => (
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                        <UserCrudCard user={item} onDelete={() => getUsers()} key={item.id}/>
                    </div>
                ))
            }
        </div>
      
    </div>
    );
}

export default List;