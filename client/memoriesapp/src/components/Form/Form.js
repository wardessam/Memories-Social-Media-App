import {TextField,Button,Typography,Box} from '@mui/material';
import {useState, useEffect} from 'react';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import {createPost,updatePost} from '../../actions/posts'
import { useSelector } from 'react-redux';
const Form = ({currentId,setCurrentId})=>{
    const [postData,setpostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    
    const dispatch = useDispatch();
    const post = useSelector((state)=> currentId ? state.posts.find((p)=> p._id ===currentId) : null );
    useEffect(()=>{
     if(post){ setpostData(post)
        console.log(post._id);
     }
    },[post])
    const handleSubmit =(e)=>{
       e.preventDefault();
       console.log(postData.selectedFile)
       if(currentId){
        dispatch(updatePost(currentId,postData))
       }
       else{
       dispatch(createPost(postData))
       }
       clear()
    }
    const clear =()=>{
         setCurrentId(null);
         setpostData({
            creator:'',
            title:'',
            message:'',
            tags:'',
            selectedFile:''
        });
    }
    return(
       <Box sx={{
         boxShadow:2,
         backgroundColor:'white'
       }}>
           <form autoComplete='off' noValidate onSubmit={handleSubmit} style={{margin:20}}>

             <Typography variant='h5' align="center"
             style={{margin:10}}>{ currentId? 'Editing':'Creating'} a Memory</Typography>
             <TextField name="creator" 
             variant='outlined' 
             label='Creator' 
             style={{margin:5}}
             fullWidth
             value={postData.creator}
             onChange={(e)=> setpostData({...postData,creator:e.target.value})}/>
              
           <TextField name="title" 
             variant='outlined' 
             label='Title' 
             style={{margin:10}}
             fullWidth
             value={postData.title}
             onChange={(e)=> setpostData({...postData,title:e.target.value})}/>

           <TextField name="message" 
             variant='outlined' 
             label='Message' 
             style={{margin:10}}
             fullWidth
             value={postData.message}
             onChange={(e)=> setpostData({...postData,message:e.target.value})}/>

           <TextField name="tags" 
             variant='outlined' 
             label='Tags' 
             style={{margin:10}}
             fullWidth
             value={postData.tags}
             onChange={(e)=> setpostData({...postData,tags:e.target.value})}/>
             <div
             style={{margin:10}}>
                 <FileBase
                 type='file'
                 multiple={false}
                 onDone={({base64})=> setpostData({...postData,selectedFile:base64})}
                 ></FileBase>
             </div>
             <Button
             variant='contained'
             color="primary"
             size='large'
             style={{margin:10}}
             type='submit' fullWidth>Submit</Button>
              <Button
             variant='contained'
             color="error"
             size='large'
             style={{margin:10}}
             onClick={clear} fullWidth>Clear</Button>
           </form>
       </Box>
    )
}
export default Form; 