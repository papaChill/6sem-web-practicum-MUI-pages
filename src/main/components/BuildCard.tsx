import Card from '@mui/material/Card'; 
import CardActions from '@mui/material/CardActions'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography'; 
import Box from '@mui/material/Box'; 
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
 

 
interface ComponentProps { 
    building: { 
        img: string,  
        title: string,  
        description: string[], 
    }; 
    index: number;
  } 

const StyledTypography = styled(Toolbar)(( {theme} ) => ({
    //color: "text.secondary",
    color: theme.palette.text.secondary,
    textAlign: 'justify',    
    marginBottom: '10px'
}))

function BuildCard({ building, index } : ComponentProps) { 
    let even = index % 2 === 1;
    return ( 
      <Card sx={{  display: 'flex', flexDirection: even ? 'row' : 'row-reverse' }}> 
        <CardMedia sx = {{md: 12}} 
            component="img" 
            alt={ building.title } 
            image={ building.img } 
        /> 
        <Box> 
          <CardContent> 
            <Typography gutterBottom variant="h5" > 
              { building.title } 
            </Typography> 

            { building.description.map((item, ind) => ( 
              <StyledTypography key={ind} /*variant="body2"*/>     
                { item }                 
              </StyledTypography>  
                           
            ))} 
            
          </CardContent> 

          <CardActions sx={{ justifyContent: even ? 'end' : 'start' }} > 
            <Button size="small">Подробнее</Button> 
          </CardActions> 
        </Box> 
      </Card> 
    ) 
} 
 
export default BuildCard;