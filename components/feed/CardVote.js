import { Box, IconButton } from '@primer/react'
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs';
export default function CardVote({points}) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
            {
                //<IconButton sx={{ background: 'none', border: 'none', color: '#FFC700', fontSize: 25 }} aria-label="Zoom out" icon={BsChevronDoubleUp} />
            }
            <BsChevronDoubleUp color={'#FFC700'} className='cursor-pointer' />
            <div> {points}</div>
            <BsChevronDoubleDown color={'#FFC700'} className='cursor-pointer' />
            {
                //<IconButton sx={{ background: 'none', border: 'none', color: '#FFC700', fontSize: 25 }} aria-label="Zoom out" icon={BsChevronDoubleDown} />
            }

        </Box>
    )
}
