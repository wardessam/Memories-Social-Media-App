import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment';
const Post = ({post})=>{
    return(
       <Card>
           <CardMedia
           height="194"
           component="img"
           image = {post.selectedFile}
           title= {post.title} />
           <div>
               <Typography variant="h6">{post.creator}</Typography>
               <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
           </div>
           <div>
               <Button style={{color:'black'}} size="small" onClick={()=>{}}>
                   <MoreHorizIcon fontSize='default'/>
               </Button>
           </div>
           <div>
           <Typography variant="body2" color='primary'>{post.tags.map((tag)=>`# ${tag} `)}</Typography>
          
           </div>
           <CardContent>
           <Typography variant="h5" gutterBottom>{post.message}</Typography>
           </CardContent>
           <CardActions>
               <Button size='small' color='primary' onClick={()=>{}}>
                   <ThumbUpAltIcon fontSize='small'/>
                   Like
                   {post.likeCount}
               </Button>
               <Button size='small' color='primary' onClick={()=>{}}>
                   <DeleteIcon fontSize='small'/>
                   Delete
               </Button>
           </CardActions>
       </Card>
    )
}
export default Post; 