import Post from './Post/Post'
import { useSelector } from 'react-redux';
import {Grid,CircularProgress} from '@mui/material'
const Posts = ()=>{
    const posts = useSelector((state)=> state.posts);
    console.log(posts);
    return(
       !posts.length ? <CircularProgress /> : (
           <Grid alignItems='stretch'>
              {
                 posts.map((post)=>(
                     <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post}/>
                     </Grid>
                 ))
              }
           </Grid>
       )
    )
}
export default Posts; 