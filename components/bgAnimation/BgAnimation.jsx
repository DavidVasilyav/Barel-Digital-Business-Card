import { Box } from '@mui/material'
import React from 'react'
import styles from './bgAnimation.module.css'
function BgAnimation() {
  return (
    <>
    <Box sx={{width: 500, height: 300, bgcolor:'#fff2', display:'flex', justifyContent:'center', alignItems:'center'}} >
    <Box width={450} height={250} bgcolor=''>
        <Box className={[styles.dumble, styles.dumble2]}>


        </Box>
        
    </Box>
    </Box>
    </>
  )
}

export default BgAnimation