import { Container} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Avatar } from '@mui/material';
import './PerInfo.css'
function PerInfo() {
  return (
    <Container>
      <div className='title'>
        
        <h3><span className='iconTitle'></span>THÔNG TIN CÁ NHÂN</h3>
      </div>
      
      <div className='bodyTitle'>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={16} md={12}>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Mã số nhân viên</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItems' defaultValue={'E20200101'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Họ và tên</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItems' defaultValue={'Phạm Văn Tôn'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Ngày tháng năm sinh</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItemsDate' type='date' defaultValue={'01/01/1990'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Giới tính</ItemP>
                  </Grid>
                  <Grid item xs={16} md={3}>
                    <Item><input className='inputItems' defaultValue={'Nam'}/></Item>
                  </Grid>
                  <Grid item xs={16} md={2}>
                    <ItemP>Quốc tịch</ItemP>
                  </Grid>
                  <Grid item xs={16} md={3}>
                    <Item><input className='inputItems' defaultValue={'Việt Nam'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Tình trạng hôn nhân</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItems' defaultValue={'Độc thân'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>CMT/Căn cước/Hộ chiếu</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItems' defaultValue={'035200002056'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Cấp ngày</ItemP>
                  </Grid>
                  <Grid item xs={16} md={3}>
                    <Item><input className='inputItemsDate' type="date" defaultValue={'01/01/2020'}/></Item>
                  </Grid>
                  <Grid item xs={16} md={2}>
                    <ItemP>Tại</ItemP>
                  </Grid>
                  <Grid item xs={16} md={3}>
                    <Item><input className='inputItems' defaultValue={'CA Hà Nam'}/></Item>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={16} md={4} sx={{justifyContent: 'space-between' }}>
                <Avatar
                  alt="Remy Sharp"
                  src={`https://photo-cms-anninhthudo.zadn.vn/w660/Uploaded/2022/85/2019_02_21/101.jpg`}
                  sx={{ minWidth: 200, minHeight: 200}}
                />
              
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  )
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const ItemP = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#ccc',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontWeight: 700,
  color: '#000',
}));

export default PerInfo