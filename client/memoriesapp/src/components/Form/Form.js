import {TextField,Button,Typography,Box} from '@mui/material';
import { padding } from '@mui/system';
import {useState} from 'react';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import {createPost} from '../../actions/posts'
const Form = ()=>{
    const [postData,setpostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
       e.preventDefault();
       console.log(postData.selectedFile)
       dispatch(createPost(postData))
    }
    const clear =()=>{

    }
    return(
       <Box sx={{
           
       }}>
           <form autoComplete='off' noValidate onSubmit={handleSubmit} >
             <Typography variant='h6'>Creating a Memory</Typography>
             <TextField name="creator" 
             variant='outlined' 
             label='Creator' 
             fullWidth
             value={postData.creator}
             onChange={(e)=> setpostData({...postData,creator:e.target.value})}/>
              
           <TextField name="title" 
             variant='outlined' 
             label='Title' 
             fullWidth
             value={postData.title}
             onChange={(e)=> setpostData({...postData,title:e.target.value})}/>

           <TextField name="message" 
             variant='outlined' 
             label='Message' 
             fullWidth
             value={postData.message}
             onChange={(e)=> setpostData({...postData,message:e.target.value})}/>

           <TextField name="tags" 
             variant='outlined' 
             label='Tags' 
             fullWidth
             value={postData.tags}
             onChange={(e)=> setpostData({...postData,tags:e.target.value})}/>
             <div>
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
             type='submit' fullWidth>Submit</Button>
              <Button
             variant='contained'
             color="error"
             size='large'
             onClick={clear} fullWidth>Clear</Button>
           </form>
       </Box>
    )
}
export default Form; 