import { Box, Button, Grid, Paper, TextField, FormControlLabel, Checkbox, Typography, Link } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';

const Signup = () => {
    let history = useHistory();

    const paperStyle = { padding: '100px 100px 100px 100px', height: '80vh', width: 380, margin: "100px auto" }
    const btnstyle = { margin: '8px 0', backgroundColor: '#0878ea' }
    const emailstyle = { margin: '10px 0' }
    const passstyle = { margin: '10px 0' }
    const bt = { padding: '0px 0px 0px 0px', color: 'grey' }
    const linkstyle = { color: '#0878ea' }
    const linkStyle = { color: '#0878ea' }
    const checkStyle = { color: '#0878ea' }
    const fontColor = { color: 'grey' }
    const fontcol = { color: '#696161', fontWeight: 600 }




    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Box border={1} borderColor="gray" padding='50px 20px 20px 20px' width='200' height='45vh' margin='30px  auto ' borderRadius='15px'>
                    <Grid align='center'>
                        <h2 style={fontcol}><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" alt="" style={{ width: 35, height: 36, borderRadius: 100 / 3 }} align='center' />     Blog   </h2>
                    </Grid>
                    <form>
                        <TextField id="outlined-basic" fullWidth label='Email address' variant="outlined" placeholder='Enter email address' style={emailstyle} />
                        <TextField id="outlined-basic" fullWidth label='New password' variant="outlined" placeholder='Enter new password' style={passstyle} />

                        <Typography align="left" style={fontColor}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="large"

                                        style={checkStyle}
                                    />
                                } />

                            By signing up, you are agreeing to <br></br>the
                            <Link href="#" style={linkStyle}>
                                {"      "}terms of service
                            </Link> & <Link href="#" style={linkStyle}>
                                privacy policy .
                            </Link>

                        </Typography>

                        <Button type='submit' variant='contained' color='primary' fullWidth style={btnstyle}>Sign Up</Button>
                    </form>
                </Box>
                <Typography style={bt}> Have an account?
                    <Link onClick={() => { history.push('/login') }} href="#" style={linkstyle}>
                        Sign in here
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )


}

export default Signup;
