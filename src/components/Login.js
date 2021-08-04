import { Button, Grid, Paper, TextField, Typography, Link, Box } from '@material-ui/core';
import React from 'react'; 





const Login=()=>{

    const paperStyle={padding : '100px 100px 100px 100px',height:'80vh',width:380,margin:"100px auto"}
    
    const btnstyle={margin:'8px 0',backgroundColor:'#0878ea'}
    const emailstyle={margin:'10px 0'}
    const passstyle ={margin:'10px 0'}
    const bt ={padding: '60px 0px 0px 0px'}
    const forgetstyle={margin:'5px 0'}
    const linkstyle={color:'#0878ea'}
    const linkkstyle={color:'#0878ea'}
    
    
    
    //const tr={padding:'15px 0px 20px 130px'}
    

    return(
        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Box border={1} borderColor="gray" padding='50px 20px 20px 20px' width='200' height='40vh' margin='30px  auto ' borderRadius='15px'>
                <Grid align='center'>
                    
                    
                    <h3><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" alt= "" style={{width:35, height:36, borderRadius:100/3}} align='center' />     Blog   </h3>
                </Grid>
                <TextField id="outlined-basic" label='Email address' variant="outlined" placeholder='Enter email address' fullWidth required style={emailstyle}/>
                <TextField id="outlined-basic" label='Password' variant="outlined" placeholder='Enter password' type='password' fullWidth required style={passstyle}/>
                
                <Typography align='right'style={forgetstyle}>
                    <Link href="#" style={linkkstyle}>
                    Forgot you password?
                    </Link>
                </Typography>
                
                <Button type='submit' color = 'primary' fullWidth variant="contained" style={btnstyle}>Sign In</Button>
                
                <Typography style={bt}> Don't  have an account?
                    <Link href="#" style={linkstyle}>
                      Sign up here
                    </Link>
                </Typography>
                
            </Box>
            </Paper>
            
        </Grid>
        
    );
    
}

export default Login;