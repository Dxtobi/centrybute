import { Box } from '@primer/react';
import Moment from 'react-moment';
export default function CardHead({ data }) {

    console.log('head:', data)
  
    return (
     
   
            <Box>
              <Box sx={{display:'flex', gap:1, alignItems:'start'}}>
                <Box sx={{ fontWeight: 600 }}>{data.name}</Box>
                <Box sx={{p:1, fontSize:10, borderWidth:1, borderColor:'#FFC700', borderRadius:50,}}>@{data.username}</Box>
              </Box>
              <div className=' text-gray-500 text-sm'>
              <Moment fromNow>{ parseInt(data.time)}</Moment>
              </div>
           </Box>
                  
     
    )
  }
  