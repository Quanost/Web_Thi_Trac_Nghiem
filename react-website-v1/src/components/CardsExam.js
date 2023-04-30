import React, { useState } from 'react';
import './CardsExam.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

import { faComment } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';


function CardsExam(props) {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className='exams-content'>
            <h2>{props.ten}</h2>
            <div className='icon-header'>
                <p><FontAwesomeIcon icon={faCalendarDays} />
                    {props.ngaythi}</p>

                <p><FontAwesomeIcon icon={faUsers} />
                    {props.soluotthi} lượt thi</p>

                <p><i className="fas fa-globe-europe"></i>
                    {props.thoigian} phút</p>
                <p><FontAwesomeIcon icon={faComment} />
                    {props.sobinhluan} Bình luận</p>
                <hr class="fade" />
            </div>

            <hr></hr>

            <button className='loading'></button>

            
                <Link
                    to={`/examdetail/${props.id}`}
                    className='button-link'
                    onClick={closeMobileMenu}
                >
                    <button className='button-exams'>Chi tiết</button>
                </Link>
           


            <div className='countQuesttion'>0/{props.socauhoi}</div>

        </div>
    );
}

export default CardsExam;
