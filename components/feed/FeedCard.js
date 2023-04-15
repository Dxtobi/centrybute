import CardAvata from './CardAvata';
import CardVote from './CardVote';
import CardHead from './CardHead';
import CardBody from './CardBody';
import { Box, Button } from '@primer/react';
import { TfiCommentAlt } from 'react-icons/tfi';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

//import CardBody from '../components/test'

const components = { CardBody }

export default function FeedCard({data}) {
    const {avatar, text, name, username, time, points} = data
    //console.log(data)
    return (

        <Box sx={{ display: 'flex', width: '60%', borderWidth: 1, borderColor: '#FFC700', borderRadius: 10, }}>
            
           
                 <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2,  width: '20%', alignItems:'center'}}>
                <CardAvata avatar={avatar}/>
                <CardVote points={points}/>
            </Box>
            <Box sx={{ width: '80%', p: 3, color: 'white', position:'relative', paddingBottom:'10%'}}>
                <CardHead data={{ name, username, time }} />
                <MDXRemote {...text} components={components} />
                {
                    //<CardBody text={text} />
                }
                
                <Button sx={{background:'#FFC700', color:'black', position:'absolute', bottom:'2.32%', right:'8.82%', background:'#FFC700'}} leadingIcon={TfiCommentAlt}>Default</Button>
            </Box>
                 
            
        </Box>

    )
}
