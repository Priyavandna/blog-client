import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

 const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState(null);
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';


    // useEffect(() => {
    //     const getImage = async () => { 
    //         try {
    //             if (file) {
    //                 const data = new FormData();
    //                 data.append("name", file.name);
    //                 data.append("file", file);
                    
    //                 const response = await API.uploadFile(data);
    //                 // Check if response contains expected data format
    //                 if (response && response.data) {
    //                     // Update post state using setPost function
    //                     setPost(prevPost => ({
    //                         ...prevPost,
    //                         picture: response.data,
    //                         categories: location.search?.split('=')[1] || 'All',
    //                         username: account.username
    //                     }));
    //                 } else {
    //                     console.error("Invalid response format:", response);
    //                     // Handle invalid response format
    //                 }
    //             }
    //         } catch (error) {
    //             console.error("Error uploading file:", error);
    //             // Handle error if needed
    //         }
    //     };
    
    //     getImage();
    // }, [file]);
    
    
    
    
    
         // Include all dependencies
    useEffect(() => {
        const getImage = async () => { 
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
            // Update categories and username after getImage completes
            post.categories = location.search?.split('=')[1] || 'All';
            post.username = account.username;
        };
    
        getImage();
    }, [file, location.search, account.username]);
    
    const savePost = async () => {
        // Ensure that categories and username are updated before saving the post
        //await getImage();
        await API.createPost(post);
        navigate('/');
    };
    

    
    
    
    
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <Image src={url} alt="banner" />

        
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add/>
                </label>
                <input type="file"
                id="fileInput"
                style={{display: 'none'}}
                onChange={(e)=> setFile(e.target.files[0])}/>
                <InputTextField placeholder='Title' onChange={(e) => handleChange(e)} name="title"/>
                <Button variant="contained" onClick={()=> savePost()}>publish</Button>
            </StyledFormControl>
            <Textarea
            minRows={5}
            placeholder="Tell your story....."
            onChange={(e) => handleChange(e)}
            name="discription"
            />
        </Container>
            
    )
 }

 export default CreatePost;