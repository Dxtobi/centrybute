import FeedCard from '@/components/feed/FeedCard';
import fakedb from '@/utils/fakedb';
import {Box} from '@primer/react'
import { serialize } from 'next-mdx-remote/serialize';

export default function Home({data}) {
//console.log(data)
  return (
    <Box sx={{ display: 'flex', flexDirection:'column', gap:2, alignItems:'center',  marginTop:2}}>
      {
        data.map((d, i)=>(
          <FeedCard data={d} key={i}/>
        ))
      }
    </Box>
  )
}

//getServerSideProps

export async function getServerSideProps(ctx) {

  //putting this in a different util file would result to error
  async function cleanData(arr) { 
    const editedData = await Promise.all(
      arr.map(async (item) => {
        const editedItem = { ...item };
        editedItem.text = await serialize(editedItem.text)
        return editedItem;
      })
);

    return editedData;
}
  
  
  const newData = await cleanData(fakedb);
  //console.log(newData)
  return { props: { data: newData } }
}