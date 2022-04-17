import {Card,CardActions,CardHeader,CardContent,CardMedia,Button,Typography} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment';
const Post = ({post})=>{
    return(
       <Card sx={{
           m:1
       }}>
            <CardHeader
       
        action={
            <Button style={{color:'black'}} size="small" onClick={()=>{}}>
            <MoreHorizIcon fontSize='default'/>
        </Button>
        }
        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />
           <CardMedia
           height="194"
           component="img"
           image = {post.selectedFile}
           title= {post.title} />
           <CardContent>
           <Typography variant="body1" color="text.secondary" gutterBottom>{post.message}</Typography>
           </CardContent>
           
           <Typography variant="body2" color='primary'>{post.tags.map((tag)=>`# ${tag} `)}</Typography>
          
           
           
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