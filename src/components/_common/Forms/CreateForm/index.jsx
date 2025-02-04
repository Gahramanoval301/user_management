import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { number, object, string } from "yup";
import { addUser, updateUser } from "../../../../reduxSlices/usersSlice";
import { addUsers, updateUsers } from "../../../../../api/users";
import PropTypes from "prop-types"
import toast from "react-hot-toast";


const CreateForm = ({ mode, userId }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users)
    const currentUser = userId && users.find((user) => user.id === userId)
    const formik = useFormik({
        initialValues: {
            firstName: currentUser?.firstName || "",
            lastName: currentUser?.lastName || "",
            university: currentUser?.university || "",
            age: currentUser?.age || "",
            birthDate: currentUser?.birthDate || "",
            phone: currentUser?.phone || "",
        },
        enableReinitialize: true,
        validationSchema: object({
            firstName: string().required("Firstname is required"),
            lastName: string().required("Lastname is required"),
            university: string().required("University is required"),
            age: number()
                .min(15, "Must be at least 15")
                .required("Age is required"),
            birthDate: string().matches(/^\d{4}-\d{1,2}-\d{1,2}$/, "BirthDate is not valid").required("Bitrth Date is required"),
            phone: string()
                .matches(/^\+\d{1,4}(\s\d{3}-\d{3}-\d{4}|\d{6,14})$/
                    , "Phone number is not valid")
                .required("Phone is required"),
        }),
        onSubmit: (values) => {
            try {
                if (mode === "create") {
                    const addUserFromBackend = async () => {
                        const resData = await addUsers(values);
                        dispatch(addUser(resData))
                    }
                    addUserFromBackend();
                    toast.success("User is added successfully");
                } else if (mode === "update") {

                    const updateUserFromBackend = async () => {
                        const resData = await updateUsers(userId, values);
                        console.debug(resData)
                        dispatch(updateUser({ id: userId, updatedUser: values }))
                    }
                    updateUserFromBackend();
                    toast.success("User is updated successfully")
                }
                formik.resetForm();
            } catch {
                toast.error("Failed to add/update user")
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <TextField
                label="Firstname"
                variant="outlined"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                label="Lastname"
                variant="outlined"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                label="University"
                variant="outlined"
                name="university"
                value={formik.values.university}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.university && Boolean(formik.errors.university)}
                helperText={formik.touched.university && formik.errors.university}
            />
            <TextField
                label="Age"
                variant="outlined"
                type="number"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
            />
            <TextField
                label="Birth Date (YYYY-MM-DD)"
                variant="outlined"
                name="birthDate"
                value={formik.values.birthDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                helperText={formik.touched.birthDate && formik.errors.country}
            />
            <TextField
                label="Phone (Country Code + Phone Number)"
                variant="outlined"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default CreateForm

CreateForm.propTypes = {
    mode: PropTypes.oneOf(["create", "update"]).isRequired,
    userId: PropTypes.number,
}