import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Exams.css';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CardsExam from '../CardsExam';
import axios from "axios";


export default function Exams() {
  const url = 'http://localhost:8087/api/exam/getList'
  const options = ['Monday', 'Tuesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday']

  const [exams, setExams] = useState([]);

  useEffect(() => {

    async function listExams() {
      try {
        const { data: response } = await axios.get('http://localhost:8087/api/exam/getList');
        console.log(response)
        setExams(response)

      } catch (error) {
        console.log(error);
      }
    }
    listExams();
  }, [])

  console.log('exams:', exams)

  return (
    <div className='content'>
      <h1 >Đề thi</h1>

      <div className='fillter-option'>
        <div className='combobox'>
          <p>
            <Autocomplete
              options={options}
              className='combobox-content'
              renderInput={(params) =>
                <TextField {...params} label="Lớp" variant="outlined" />}
            />
          </p>
          <p>
            <Autocomplete
              options={options}
              className='combobox-content'
              renderInput={(params) =>
                <TextField {...params} label="Môn" variant="outlined" />}
            />
          </p>
        </div>

        <div className='combobox'>
          <p>
            <Autocomplete
              options={options}

              className='combobox-content'
              renderInput={(params) =>
                <TextField {...params} label="Chương" variant="outlined" />}
            />
          </p>
          <p>
            <Autocomplete
              options={options}
              className='combobox-content'
              renderInput={(params) =>
                <TextField {...params} label="Bài" variant="outlined" />}
            />
          </p>
        </div>

        {exams.map(exams => (
          <CardsExam
            id={exams.id}
            ten={exams.title}
            ngaythi={exams.createAt}
            thoigian={exams.duration}
            socauhoi={exams.numQuestions}
            sobinhluan={30}
            soluotthi={30}
          />

        ))}


      </div>

    </div>
  );
}
