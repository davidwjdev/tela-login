import { useForm } from "react-hook-form";

const RegisterForm = () => {
const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) => alert(JSON.stringify(data));
const onErrors = errors => console.error(errors);

const registerOptions = {
    name: { required: "Name is required"},
    email: { required: "Email is required" },
    password: { required: "Password is required",
                minValue: 6,
                message: "Password must have at least 8 characters"
            }
}
};
export default RegisterForm;
