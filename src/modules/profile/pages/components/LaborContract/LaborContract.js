import React from 'react'
import { Container} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import './LaborContract.css'
function LaborContract() {
  return (
    <Container>
      <div className='title'>
        
        <h3><span className='iconTitle'></span>THÔNG TIN HỢP ĐỒNG LAO ĐỘNG</h3>
      </div>
      
      <div className='bodyTitle'>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={16} md={12}>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Loại hợp đồng</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItems' defaultValue={'...'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Số hợp đồng</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItems' defaultValue={'...'}/></Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1, paddingBottom: 1}}>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={16} md={4}>
                    <ItemP>Thời gian hợp đồng</ItemP>
                  </Grid>
                  <Grid item xs={16} md={8}>
                    <Item><input className='inputItems' defaultValue={'...'}/></Item>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            
            <Grid item xs={16} md={4} >
              <Button variant='contained' size='small' color='success'>Danh sách hợp đồng</Button>
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
export default LaborContract