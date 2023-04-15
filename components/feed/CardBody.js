import { Box } from '@primer/react'
import { MDXRemote } from 'next-mdx-remote'

export default function Home({text}) {
  //console.log(text)
    return (        
            <Box sx={{marginTop:3}}>
              <p>
                {
                    text
                }
              </p>
            </Box>
    )
  }
  