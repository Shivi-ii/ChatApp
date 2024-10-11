import React, {useState} from 'react'
import { Container, Paper, TextField, Typography, Button, Avatar, Stack, IconButton } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation} from '6pp'
import { usernameValidator } from '../utils/validator';

const Login = () => {

    const [isLogin,setIsLogin] = useState(true)
    const bio = useInputValidation("")
    const  username = useInputValidation("", usernameValidator)
    const email = useInputValidation("")
    const password = useInputValidation("")

    const avatar = useFileHandler("single")

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleSignup = (e) => {
        e.preventDefault()
    }
    return(
        <div style={{backgroundImage: 'linear-gradient(rgb(255,255,0,0), rgb(255,159,159))'}}>

        <Container component={"main"} maxWidth="xs" sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Paper elevation={3} 
            sx={{
                width: "500px",
                padding:4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            {isLogin ? (

                    <>
                    <Typography variant="h5">Login</Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onSubmit={handleLogin}
                    >
                        <TextField required fullWidth label="username" margin="normal" variant="outlined" size='small' value={username.value} onChange={username.changeHandler}/>
                        <TextField required fullWidth label="password" type="password" margin="normal" variant="outlined" size='small' value={password.value} onChange={password.changeHandler}/>
                        <Button sx={{marginTop: "1rem"}} fullWidth variant="contained" color="primary" type="submit">Login</Button>
                        <Typography textAlign={"center"} m={"1rem"}>or</Typography>
                        <Button fullWidth variant="text" onClick={() => setIsLogin(false)}>Register Here</Button>
                    </form>
                    </>
                ):(
                    <>
                    <Typography variant="h5">Sign up</Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                    onSubmit={handleSignup}
                    >
                    <Stack position={"relative"} width={"7rem"} margin={"auto"}>
                    <Avatar
                    sx={{
                    width: "7rem",
                    height: "7rem",
                    objectFit: "contain",                    
                    }}
                    src={avatar.preview}
                    />
                    <IconButton
                    sx={{
                        color: "white",
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        bgcolor: "rgba(0,0,0,0.5)",
                        ":hover":{
                        bgcolor: "rgba(0,0,0,0.7)",
                        },
                    }}
                    component="label"
                    >
                    <>
                    <CameraAltIcon/>
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                    </>
                    </IconButton>
                    </Stack>
                    {avatar.error && (
                            <Typography color="error" variant='caption' m={"1rem auto"}>{avatar.error}</Typography>
                    )}
                        <TextField required fullWidth label="Email" type="Email" margin="normal" variant="outlined" size='small' value={email.value} onChange={email.changeHandler}/>
                        {
                            email.error && (
                                <Typography color="error" variant='caption'>{email.error}</Typography>
                            )
                        }
                        <TextField required fullWidth label="bio" margin="normal" variant="outlined" size='small' value={bio.value} onChange={bio.changeHandler}/>
                        <TextField required fullWidth label="username" margin="normal" variant="outlined" size='small' value={username.value} onChange={username.changeHandler}/>
                        {
                            username.error && (
                                <Typography color="error" variant='caption'>{username.error}</Typography>
                            )
                        }
                        <TextField required fullWidth label="password" type="password" margin="normal" variant="outlined" size='small' value={password.value} onChange={password.changeHandler}/>
                        {
                            password.error && (
                                <Typography color="error" variant='caption'>{password.error}</Typography>
                            )
                        }
                        <Button sx={{marginTop: "1rem"}} fullWidth variant="contained" color="primary" type="submit">SIGN UP</Button>
                        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                        <Button fullWidth variant="text" onClick={() => setIsLogin(true)}>LOGIN HERE</Button>
                    </form>
                    </>
                )
            }
            </Paper>
        </Container>
        </div>
        
    )
}

export default Login