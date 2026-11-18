import React from 'react';
import Container from '@mui/material/Container'; 
import Box from '@mui/material/Box'; 
import structures from '../data';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { useParams, Link } from 'react-router-dom';

function BuildCard(){
    
    const { id } = useParams();
    const building = structures[id ? parseInt(id) : 0];
    return (
        <>
        <Navbar active="0" />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            
            <Typography variant="h4" align="center" mt='20px' >
                {building.title}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center',  marginY: 4 }}>
        
                <ImageListItem sx={{ width: { xs: '100%', md: '600px' } }}>
                    <img           
                        src={building.img}
                        alt={building.title}
                        style={{ 
                            width: '100%', 
                            height: 'auto'
                        }}
                    />
                </ImageListItem>
            </Box>
            
            <Grid container spacing={4}>               
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                        {building.description[0]}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                        {building.description[1]}
                    </Typography>
                </Grid>
            </Grid>
                 
        </Box>
        </>
    );
}
export default BuildCard;