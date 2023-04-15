/*import { serialize } from 'next-mdx-remote/serialize';


export default async function cleanData(arr) {

    
        const editedData = await Promise.all(
          arr.map(async (item) => {
            const editedItem = { ...item };
            editedItem.text = await serialize(editedItem.text)
            return editedItem;
          })
    );
    
    console.log('---', editedData, '-----')
        return editedData;
      
    
}*/