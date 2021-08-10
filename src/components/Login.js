import { Button, Grid, Paper, TextField, Typography, Link, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { grey } from '@material-ui/core/colors';
<<<<<<< HEAD
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
=======
>>>>>>> 607863304927b719a9d730736d9e2fcf0d9b9e3e





const Login = () => {
    let history = useHistory();

    const paperStyle = { padding: '100px 100px 100px 100px', height: '80vh', width: 380, margin: "100px auto" }

    const btnstyle = { margin: '8px 0', backgroundColor: '#0878ea' }
    const emailstyle = { margin: '10px 0', color: grey }
    const passstyle = { margin: '10px 0', color: grey }
    const bt = { padding: '60px 0px 0px 0px' }
    const forgetstyle = { margin: '5px 0' }
    const linkstyle = { color: '#0878ea' }
    const linkkstyle = { color: '#0878ea' }
    const fontcol = { color: '#696161', fontWeight: 600 }
<<<<<<< HEAD
    const initialValues = {
        emailaddress: '',
        password: ''
    }
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(true)
        }, 2000)

        console.log(props)

    }
    const validationSchema = Yup.object().shape({
        emailaddress: Yup.string().email('Please enter valid email').required('Required'),
        password: Yup.string().required('Required')
    })
=======
>>>>>>> 607863304927b719a9d730736d9e2fcf0d9b9e3e






    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
<<<<<<< HEAD
                <Box border={1} borderColor="gray" padding='50px 20px 20px 20px' width='200' height='45vh' margin='30px  auto ' borderRadius='15px'>
=======
                <Box border={1} borderColor="gray" padding='50px 20px 20px 20px' width='200' height='40vh' margin='30px  auto ' borderRadius='15px'>
>>>>>>> 607863304927b719a9d730736d9e2fcf0d9b9e3e
                    <Grid align='center'>


                        <h2 style={fontcol}><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" alt="" style={{ width: 35, height: 36, borderRadius: 100 / 3 }} align='center' /> Blog </h2>
                    </Grid>
<<<<<<< HEAD
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} id="outlined-basic" label='Email address' name='emailaddress'
                                    variant="outlined" placeholder='Enter email address' fullWidth style={emailstyle}
                                    helperText={<ErrorMessage name='emailaddress' />}
                                />
                                <Field as={TextField} id="outlined-basic" label='Password' name='password'
                                    variant="outlined" placeholder='Enter password' type='password' fullWidth style={passstyle}
                                    helperText={<ErrorMessage name='password' />}
                                />

                                <Typography align='right' style={forgetstyle}>
                                    <Link href="#" style={linkkstyle}>
                                        Forgot your password?
                                    </Link>
                                </Typography>

                                <Button type='submit' color='primary' fullWidth variant="contained" style={btnstyle}>Sign In</Button>
                            </Form>
                        )}
                    </Formik>
=======
                    <TextField id="outlined-basic" label='Email address' variant="outlined" placeholder='Enter email address' fullWidth style={emailstyle} />
                    <TextField id="outlined-basic" label='Password' variant="outlined" placeholder='Enter password' type='password' fullWidth style={passstyle} />

                    <Typography align='right' style={forgetstyle}>
                        <Link href="#" style={linkkstyle}>
                            Forgot your password?
                        </Link>
                    </Typography>

                    <Button type='submit' color='primary' fullWidth variant="contained" style={btnstyle}>Sign In</Button>
>>>>>>> 607863304927b719a9d730736d9e2fcf0d9b9e3e

                    <Typography style={bt}> Don't  have an account?
                        <Link onClick={() => { history.push('/signup') }} href="#" style={linkstyle}>
                            Sign up here
                        </Link>
                    </Typography>

                </Box>
            </Paper>

        </Grid>

    );

}

export default Login;
