import {useNavigate, useParams} from "react-router";
import {
    Box, Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import {useEffect, useState} from "react";
import RoleService from "../../../services/role.service.js";
import {useFormik} from "formik";
import UserService from "../../../services/user.service.js";
import {toast} from "react-toastify";

function UserEdit() {
    const {uid} = useParams();
    const [roles, setRoles] = useState([]);
    const [currentRole, setCurrentRole] = useState(1);
    const navigate = useNavigate();


    useEffect(() => {
        RoleService.getAllRoles().then(res => {
            setRoles(res.data)
        });

        UserService.getUserById(uid).then(res => {
           updateUserForm.setValues({
               name: res.data.name,
               email: res.data.email,
               phone: res.data.phone,
               roleId: res.data.roleId,
               rating: res.data.rating,
           });
           setCurrentRole(res.data.roleId);

        })
    }, [])

    const updateUserForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            roleId: "",
            rating: 0
        },
        onSubmit: values => {
            console.log(values);
            UserService.updateUser(values, uid).then(() => {
                toast.success("Update user successfully");
                navigate("/admin/users")
            })
        }
    })

    const handleChangeRole = (e) => {
        setCurrentRole(e.target.value);
        updateUserForm.setFieldValue("roleId", +e.target.value)
    }

    return (
        <>
            <Card>
                <CardHeader title="Update user"></CardHeader>
                <CardContent>
                    <Box
                        component="form"
                        sx={{'& .MuiTextField-root': {m: 1, width: '50ch'}}}
                        noValidate
                        autoComplete="off"
                        onSubmit={updateUserForm.handleSubmit}
                    >
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                name={"name"}
                                type={"text"}
                                value={updateUserForm.values.name}
                                onChange={updateUserForm.handleChange}
                            />
                        </div>

                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                type={"email"}
                                name={"email"}
                                value={updateUserForm.values.email}

                                onChange={updateUserForm.handleChange}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Phone"
                                type={"text"}
                                name={"phone"}
                                value={updateUserForm.values.phone}
                                onChange={updateUserForm.handleChange}
                            />
                        </div>
                        <div>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="roleId"
                                    value={currentRole}
                                    onChange={handleChangeRole}

                                >
                                    { roles.map(role => (
                                        <FormControlLabel key={role.id} value={role.id} control={<Radio />} label={role.name} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Button type={"submit"} variant={"contained"}>Update</Button>

                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default UserEdit