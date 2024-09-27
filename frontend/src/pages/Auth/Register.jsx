import { Box, Typography, TextField, Button, FormControlLabel, Switch, useTheme } from "@mui/material"
import { green } from "@mui/material/colors"
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from 'yup';
import { registerAPI } from "../../utils/apiRequests";


const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(4, 'Password must be at least 4 characters')
        .required('Password is required'),
});
function Register({ setAuth }) {

    const theme = useTheme();

    const green = theme.palette.primary.green;
    const initialValues = {
        name: '',
        email: '',
        password: '',

    }



    async function handleSubmit(values, { setSubmitting }) {
        console.log(values)
        const data = await registerAPI(values);
        if (data.success) {
            setAuth(data.data);
        }

        setSubmitting(false)
    }


    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,

        onSubmit: handleSubmit

    })

    return (
        <Box
            sx={{
                width: 400,
                padding: 4,
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                Register
            </Typography>

            <form onSubmit={formik.handleSubmit} noValidate>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />


                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />

                <Box display='flex' justifyContent='center'>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ bgcolor: green, mt: 2, py: 1.5, width: '50%' }}
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        Register
                    </Button>
                </Box>


            </form>
        </Box>
    )
}

export default Register