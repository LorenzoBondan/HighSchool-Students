import locationIcon from 'assets/images/location-icon.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Student } from 'types/student';
import { BASE_URL } from 'util/requests';
import Check from 'assets/images/checked.png';
import Uncheck from 'assets/images/unchecked.png';
import './styles.css';
import StudentDetailsLoader from './StudentDetailsLoader';
import Reviews from 'pages/Reviews';

import { TfiArrowCircleLeft } from 'react-icons/tfi';
import { RxInstagramLogo } from 'react-icons/rx';
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';

import { FaSlackHash } from 'react-icons/fa';
import { HiMusicalNote } from 'react-icons/hi2';

type UrlParams = {
    studentId: string;
}

function StudentDetails(){
    
    // Idade atual através da birthDate (time.now - birthDate)
    function ageCalc(date: string | undefined){
        var miliseconds = date? new Date().getTime() - new Date(date).getTime() : new Date().getTime();
        var years = miliseconds / (31556952000);
        return Math.trunc(years).toString();
    }

    const { studentId } = useParams<UrlParams>();

    const [student, setStudent] = useState<Student>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
        .get(`${BASE_URL}/students/${studentId}`)
        .then((response) => {
            setStudent(response.data);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [studentId]);


    function currentCity(city: String | undefined){
        const cityImgs = [];

        if(city === "Bento Gonçalves"){
            cityImgs.push("https://a.cdn-hotels.com/gdcs/production190/d1867/ac8d42ca-cbb0-412c-80e8-21508dc41219.jpg");
            cityImgs.push("https://blog.123milhas.com/wp-content/uploads/2021/11/BANNER-PRINCIPAL-1920x1077-28.jpg");
            cityImgs.push("https://www.tasteandfly.com.br/wp-content/uploads/2019/07/HOTEL-SPA-DO-VINHO1.jpg");
        } 
        else if(city === "Caxias do Sul") {
            cityImgs.push("https://gcpstorage.caxias.rs.gov.br/images/2020/06/f38b13be-346b-49a1-ac3c-545963eb36fc_1200.jpg");
            cityImgs.push("https://www.melhoresdestinos.com.br/wp-content/uploads/2022/10/caxias-do-sul-o-que-fazer17.jpeg");
            cityImgs.push("https://drvacina.com/storage/posts/thumb_caxias-do-sul-historia-e-populacao-mhWstMaz8YaX4QVmfZk6.jpeg");
        }
        else if(city === "Porto Alegre") {
            cityImgs.push("https://vidasemparedes.com.br/wp-content/uploads/2020/07/portoalegre-rs-vidasemparedes-8.jpg");
            cityImgs.push("https://www.sesc-rs.com.br/wp-content/uploads/2021/10/iStock-1211696001.jpg");
            cityImgs.push("https://pactoalegre.poa.br/sites/default/files/2019-03/IMG_03977.jpg");
        }
        else if(city === "São Paulo") {
            cityImgs.push("https://cultura.uol.com.br/upload/tvcultura/noticias/20221208131653_pexels-derick-oliveira-de-lemos-13559247.jpg");
            cityImgs.push("https://www.melhoresdestinos.com.br/wp-content/uploads/2016/08/o-que-fazer-em-sao-paulo-capa2019-01.jpg");
            cityImgs.push("https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2020/07/19075110/%40andreiamarzola-819x1024.jpg");
        }
        else if(city === "Garibaldi") {
            cityImgs.push("https://vidasemparedes.com.br/wp-content/uploads/2019/03/garibaldi-vidasemparedes-9.jpg.webp");
            cityImgs.push("https://admin2.garibaldi.rs.gov.br/storage/50/PhotoAssets/45210/images/large/Foto-Buarque-Manipulada.JPG");
            cityImgs.push("https://www.guiadoturismobrasil.com/up/img/1445594092.jpg");
        }
        else if(city === "Pelotas") {
            cityImgs.push("https://wp.ufpel.edu.br/3cpgfeg/files/2018/03/Mercado1-400x258.jpg");
            cityImgs.push("https://revistanews.com.br/wp-content/uploads/2020/03/Pelotas-a%C3%A9rea-1.jpg");
            cityImgs.push("https://diariodamanhapelotas.com.br/site/wp-content/uploads/2015/07/Pelotas-A%C3%A9rea-02-680x365.jpg");
        }
        else if(city === "Florianópolis") {
            cityImgs.push("https://blog.123milhas.com/wp-content/uploads/2022/05/o-que-fazer-em-santa-catarina-pontos-turisticos-passeios-conexao123.png");
            cityImgs.push("https://www.viagensecaminhos.com/wp-content/uploads/2011/02/florianopolis-santa-catarina.jpg");
            cityImgs.push("https://www.viagensperfeitas.com/wp-content/uploads/2020/03/Floriano%CC%81polis-min.jpg");
        }
        
        return cityImgs;
    }

    const getCity = currentCity(student?.location);

    return(
        <div className='student-details-container'>

            <div className='base-card student-details-card'>
            {isLoading ? <StudentDetailsLoader/> : 
            
                <>
                <div className='student-details-buttons-container'>

                    { parseInt(studentId) > 1 && (
                        <Link to={`/students/${(parseInt(studentId) - 1).toString()}`}>
                            <div className='gonext-container'>
                                <i><TfiArrowCircleLeft/></i>
                            </div>
                        </Link>
                    )}

                    { parseInt(studentId) < 33 && (
                        <Link to={`/students/${(parseInt(studentId) + 1).toString()}`}>
                            <div className='gonext-container' style={{transform:"rotate(-180deg)"}}>
                                <i><TfiArrowCircleLeft/></i>
                            </div>
                        </Link>
                    )}
                </div>
                
                <div className='row'>
                    <div className='col-xl-6'>
                        <div className='student-details-img-container'>
                            <img src={student?.imgUrl} alt={student?.nickname} />
                        </div>

                        <div className='card-bottom-container'>
                        <>
                            <div className='card-bottom-container-student-info card-bottom-container-student-card'>

                                <h3>{student?.nickname}</h3>

                                <h6>Name: {student?.name}</h6>
                            
                                <div className='birthdate-container'>
                                    <h6>Age: {ageCalc(student?.birthDate)}</h6>
                                    <img src="https://em-content.zobj.net/thumbs/160/apple/118/birthday-cake_1f382.png" alt="" />
                                    <h6>{student?.birthDate.substring(0,10)}</h6>
                                </div>

                                <div className='graduated-zone'>
                                    {student?.graduated ? (
                                    <>
                                        <h6>Graduated:</h6>
                                        <img src={Check} width="18" height="18" alt="checked" />
                                    </>
                                    ) : (
                                    <>
                                        <h6>Graduated:</h6>
                                        <img src={Uncheck} width="18" height="18" alt="unchecked" />
                                    </>
                                    )}
                                </div>

                                <div className='courses-zone'>
                                    <h6>Courses: </h6>
                                    <div className='courses-list-zone' key={student?.id}>
                                        {student?.courses.map(course => (<h5>{course.name}</h5>))}
                                    </div>
                                </div>

                            </div>

                            <div style={{display:"flex", flexDirection:"column"}}>
                                <div className='contact-container'>
                        
                                    <div className='contact-container-imgs' >
                                        <a href={student?.contact.phone}>
                                            <button style={{ backgroundColor: '#25d366', border:"none", borderRadius:"50%", boxShadow:"5px 10px 10px silver", padding:"5px 12px"}}>
                                                <i style={{color:"white"}}><ImWhatsapp/></i>
                                            </button>
                                        </a>

                                        <a href={student?.contact.instagram}>
                                            <button style={{ backgroundColor: '#ac2bac', border:"none", borderRadius:"50%", boxShadow:"5px 10px 10px silver", padding:"5px 12px"}}>
                                                <i style={{color:"white"}}><RxInstagramLogo/></i>
                                            </button>
                                        </a>

                                        <a href={student?.contact.facebook}>
                                            <button style={{ backgroundColor: '#3b5998', border:"none", borderRadius:"50%", boxShadow:"5px 10px 10px silver", padding:"5px 12px"}}>
                                                <i style={{color:"white"}}><BsFacebook/></i>
                                            </button>
                                        </a>
                                    </div>
                        
                                </div>

                    <div className='main-music-container'>
                        <div className='music-container' >
                        
                            <div className='music-container-img-container'>
                                <img src="https://i.ytimg.com/vi/kOkQ4T5WO9E/maxresdefault.jpg" alt="" />
                            </div>

                            <div className='music-container-text-container'>
                                <h5 
                                    style={{color:"#9E9E9E", fontSize:"0.7em"}}
                                    ><i style={{marginRight:"2px"}}>
                                        <HiMusicalNote/>
                                    </i>
                                    Entrace music: 
                                </h5>

                                <h6 style={{marginLeft:"5px", color:"#A00909", fontFamily:"Roboto", fontSize:"0.7em"}}>Ultraje a rigor</h6>
                                <h6 style={{marginLeft:"5px", color:"black", fontFamily:"Roboto", fontSize:"0.6em", fontStyle:"italic"}}>Todo mundo gosta de mim</h6>
                            </div>
                        </div>
                    </div>

                            

                            
                            </div>


                        </>
                    </div>
                </div>

                <div className='col-xl-6'>
                    <div className='description-container'>
                        <div className='description-container-text'>
                            <h2><i><FaSlackHash/></i> Remembered by</h2>
                            <p>{student?.description}</p>
                        </div>

                        <div className='card-bottom-container-postit'>
                                <img src={student?.postitUrl} alt="postit" />
                        </div>
                    </div>



                    <div className='current-location-container'>
                        <div className='current-location-container-text'>
                            <img src={locationIcon} alt="icon" />
                            <h6>Current Location:</h6>
                            <h5>{student?.location}</h5>
                        </div>
                        <div className='current-location-container-imgs' key={student?.id}>
                            {getCity.map(city => <img src={city} alt="city" />)}
                        </div>
                    </div>
                    


                </div>
  
            </div>

            </>
            }
            </div>

            <div className='student-details-reviews-container'>
                <Reviews studentUsername={student?.nickname}/>
            </div>

        </div>
    );
}

export default StudentDetails;
