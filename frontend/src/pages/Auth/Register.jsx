import { Box, Typography, TextField, Button, FormControlLabel, Switch, useTheme } from "@mui/material"
import { green } from "@mui/material/colors"
import { useFormik } from "formik";
import * as Yup from 'yup';


const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});
function Register() {

    const theme = useTheme();

    const green = theme.palette.primary.green;
    const initialValues = {
        name: '',
        email: '',
        password: '',

    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,

        onSubmit: (values) => {
            console.log(values)
        }

    })
    function handleSubmit(values) {
        console.log(values)
    }

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

            <form onSubmit={formik.handleSubmit}>
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