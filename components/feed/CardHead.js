import { Box } from '@primer/react';

export default function CardHead({ data }) {

    console.log('head:', data)
  
    return (
     
   
            <Box>
              <Box sx={{display:'flex', gap:1, alignItems:'start'}}>
                <Box sx={{fontWeight:600}}>Smeet Veera</Box>
                <Box sx={{p:1, fontSize:10, borderWidth:1, borderColor:'#FFC700', borderRadius:50,}}>@smeetvee10</Box>
              </Box>
              <div className=' text-gray-500 text-sm'>
                1 minute ago
              </div>
           </Box>
                  
     
    )
  }
  