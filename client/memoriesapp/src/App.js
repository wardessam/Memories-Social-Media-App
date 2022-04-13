import {Container,AppBar,Typography,Grow,Grid} from '@mui/material';
import Memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getPosts} from './actions/posts'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getPosts());
  },[])
  return (
   
    <Container maxWidth='lg'>
      <AppBar  position='static' color='inherit'>
        <Typography  variant="h2" align="center">Memories</Typography>
        <img src={Memories} alt="Memories" height="60" width="60"/> 
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
             <Grid item xs={12} sm={7}>
                <Posts/>
             </Grid>
             <Grid item xs={12} sm={4}>
               <Form/>
             </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    
  );
}

export default App;
