import {Container,Stack,Typography,Grid} from '@mui/material';
import Memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {useDispatch} from 'react-redux';
import {useEffect,useState} from 'react';
import {getPosts} from './actions/posts'
function App() {
  const [currentId,setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getPosts());
  },[])
  return (
   
    <Container maxWidth='lg'>
      <Stack style={{justifyContent:'center',margin:20,paddingBottom:10,boxShadow:'10px 10px 10px grey',backgroundColor:'white'}} direction='row' gap={3}>
       <img src={Memories} alt="Memories" height="60" width="60"/> 
       <Typography  variant="h2" align="center">Memories</Typography>
      </Stack>
      
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
             <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
             </Grid>
             <Grid item xs={12} sm={4}>
               <Form currentId={currentId} setCurrentId={setCurrentId}/>
             </Grid>
          </Grid>
        </Container>
     
    </Container>
    
  );
}

export default App;
