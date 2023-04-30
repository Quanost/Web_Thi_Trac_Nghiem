import React, { useState } from 'react';

import './ExamDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

import Avatar from '@mui/material/Avatar';
import CardComment from '../CardComment';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";


const ExamDetails = () => {
    const { examId } = useParams();
    const [exam, setExam] = useState({});
    const [question, setQuestion] = useState([]);
    const [comment, setComment] = useState([]);

    const answers=["A","B","C","D","E","F","G","H","I","J"];


    const data = [
        { name: "Anom", age: 9, gender: 30 },
        { name: "Megha", age: 8, gender: 40 },
        { name: "Subham", age: 7, gender: 45 },
    ]

    useEffect(() => {

        async function ExamDetails() {
            try {
                const { data: response } = await axios.get('http://localhost:8087/api/exam/getById?id=' + examId);

                setExam(response)

            } catch (error) {
                console.log(error);
            }
        }
        ExamDetails();
    }, [])

    useEffect(() => {

        async function Question() {
            try {
                const { data: response } = await axios.get('http://localhost:8087/api/question/getQuestionByIdExam?id=' + examId);

                setQuestion(response)

            } catch (error) {
                console.log(error);
            }
        }
        Question();
    }, [])

    useEffect(() => {

        async function Comment() {
            try {
                const { data: response } = await axios.get('http://localhost:8087/api/comment/getByIdExam?id=' + examId);

                setComment(response)

            } catch (error) {
                console.log(error);
            }
        }
        Comment();
    }, [])

    console.log('Cau hoi', question);

    return (
        <>
            <div className='content'>
                <div className='content-left'>
                    <h1 >{exam.title}</h1>
                    <div className='infomation-exam'>
                        <p><FontAwesomeIcon icon={faCalendarDays} />
                            {exam.createAt}</p>

                        <p><FontAwesomeIcon icon={faUsers} />
                            20 lượt thi</p>

                        <p><i className="fas fa-globe-europe"></i>
                            {exam.duration} phút</p>
                        <p><FontAwesomeIcon icon={faComment} />
                            20 Bình luận</p>
                    </div>

                   
                    {/* {question.map((question, key) => {
                        return (

                            <div className='question-content'>
                                <div>Câu &nbsp;{key + 1}:</div>
                                <div>{question.conTent}</div>

                                <p>A.&nbsp;{question.answers.filter((item) => (
                                    (
                                        item.length < 5
                                    )
                                )).join(" ")}</p>

                            </div>

                        )
                    })} */}

                    {question.map((question, key) => {
                        return (

                            <div className='question-content'>
                                <div>Câu &nbsp;{key + 1}:&nbsp;{question.conTent}</div>
                               
                               <p>{question.answers.map((item,index) => {
                                   return (
                                    <div ><p> {answers[index]}.&nbsp;{item}</p></div>
                                   )
                                    // return item.length >= 4 && `${item}  `;
                                })}</p>

                            </div>

                        )
                    })}



                    <div className='button-footer'> <button className='button-batdau'>Bắt đầu thi</button></div>

                </div>

                {/* Top 3 right content */}
                <div className='right-content'>
                    <div className='header-top3'><h2>Top 3 luot thi</h2></div>
                    <div>
                        <table className='table-top3'>
                            <tr>
                                <th>Top</th>
                                <th>Ten</th>
                                <th>Diem</th>
                                <th>Thoi gian</th>
                            </tr>

                            {data.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>Top {key + 1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.age} đ</td>
                                        <td>{val.gender} phút</td>
                                    </tr>
                                )
                            })}



                        </table>
                    </div>
                    <div className='footer-righttop'>
                        <h4>Hãy chinh phục đề thi ngay nào</h4>
                        <button className='button-batdau'>Bắt đầu thi</button>
                    </div>
                </div>

            </div>
            <div className='comment-content'>
                <div className='header-comment'>
                    <p>8000 Binh luan</p>
                    <select>
                        <option>Mới nhất</option>
                        <option>Lượt thích</option>
                        <option>Cu nhất</option>
                    </select>
                </div>
                <div className="comment-body">
                    <div className='user-comment'>
                        <p><Avatar
                            className="avatar"
                            alt="avatar"
                            src="https://vtv1.mediacdn.vn/thumb_w/650/2022/3/4/avatar-jake-neytiri-pandora-ocean-1646372078251163431014-crop-16463720830272075805905.jpg"
                            sx={{ width: 60, height: 60 }} />
                        </p>
                        <p>
                            <div className='comment-input'>
                                <input type='text' placeholder="Bình luận của bạn" placeholderTextColor=""></input>
                                <FontAwesomeIcon icon={faPaperPlane} className='icon-comment' />
                            </div>
                        </p>
                    </div>
                    <hr></hr>


                    {comment.map(comments => (
                        <CardComment
                            id={comments.id}
                            content={comments.conTent}
                            numOfLikes={comments.numOfLikes}
                            numOfReplies={comments.numOfReplies}
                            fullName={comments.fullName}
                            avarTar={comments.avarTar}
                        >

                        </CardComment>

                    ))}

                </div>
            </div>
        </>
    );
}

export default ExamDetails;
