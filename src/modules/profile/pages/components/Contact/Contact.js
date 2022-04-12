import React from 'react'
import { Container} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import './Contact.css'
function Contact() {
  return (
    <Container>
      <div className='title'>
        
        <h3><span className='iconTitle'></span>THÔNG TIN LIÊN LẠC</h3>
      </div>
      
      <div className='bodyTitle'>
          <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={16}>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Số điện thoaị nhân viên 1</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'0886684049'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Số điện thoaị nhân viên 2</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'0886684049'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Email công việc</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'tonpv@trithucmoi.co'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Email cá nhân</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'phamvanton.pvt@gmail.com'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Nguyên quán</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'Hà Nam'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Chỗ ở hiện nay</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'Cổ nhuế 2, Hà Nội'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Người thân 1</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'Phạm Văn T'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Quan hệ</ItemP>
                    </Grid>
                    <Grid item xs={16} md={2}>
                      <Item><input className='inputItems' defaultValue={'Bố đẻ'}/></Item>
                    </Grid>
                    <Grid item xs={16} md={2}>
                      <ItemP>Số điện thoại</ItemP>
                    </Grid>
                    <Grid item xs={16} md={4}>
                      <Item><input className='inputItems' defaultValue={'0000'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Người thân 2</ItemP>
                    </Grid>
                    <Grid item xs={16} md={8}>
                      <Item><input className='inputItems' defaultValue={'Phạm Thị X'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                  <Grid container spacing={2} columns={12}>
                    <Grid item xs={16} md={4}>
                      <ItemP>Quan hệ</ItemP>
                    </Grid>
                    <Grid item xs={16} md={2}>
                      <Item><input className='inputItems' defaultValue={'Mẹ đẻ'}/></Item>
                    </Grid>
                    <Grid item xs={16} md={2}>
                      <ItemP>Số điện thoại</ItemP>
                    </Grid>
                    <Grid item xs={16} md={4}>
                      <Item><input className='inputItems' defaultValue={'000'}/></Item>
                    </Grid>
                  </Grid>
                </Box>
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
export default Contact