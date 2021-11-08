import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

import podcastLogo from '../assets/podcast-logo.png';

const styles = {
    podcastLogo: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px'
    }
}

const Publish = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grow style={{ transformOrigin: '0 0 0' }} {...{ timeout: 2000 }} in={true}>
                <Typography>
                    In Progress
                </Typography>
            </Grow>
        </Box>
    );
};

export default Publish;