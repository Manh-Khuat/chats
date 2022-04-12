import './home.css';
import React from 'react';
import PerInfo from './components/PerInfo/PerInfo';
import Contact from './components/Contact/Contact';
import JobInfo from './components/JobInfo/JobInfo';
import LaborContract from './components/LaborContract/LaborContract';
import Bonus from './components/Bonus/Bonus';
import Discipline from './components/Discipline/Discipline';
import { Container, Stack } from '@mui/material';
import { Button } from '@mui/material';
// import ProfileCard from "./components/ProfileCard";
export default function Home() {
  return (
    // <div className="background">
    // 	{/* <div className="bg-pattern-top"></div>
    //   <ProfileCard
    // 		name="Tôn Phạm Văn"
    // 		age="22"
    // 		city="Việt Nam"
    // 		followers="80K"
    // 		likes="803K"
    // 		photos="1.4K"
    // 	></ProfileCard>
    // 	<div className="bg-pattern-bottom"></div> */}


    // </div>
    <Container
      sx={{
        width : '100%',
        marginTop : '8px'
      }}
    >
      <div className='Home'>
        <div className='headerprofile'>
          <h2>HỒ SƠ NHÂN SỰ</h2>
        </div>
        <PerInfo />
        <Contact />
        <JobInfo />
        <LaborContract />
        <Bonus />
        <Discipline />
        <div className='footerprofile'>
          <Stack direction="row" marginBottom={2} marginTop={2}
            sx={{
              justifyContent: 'space-evenly'
            }}
          >
            <Button variant='contained'>Đóng</Button>
            <Button variant='contained'>Cập nhật</Button>
          </Stack>

        </div>
      </div>
    </Container>
  );
}
