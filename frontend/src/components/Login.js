import { useState } from "react";
import "../Assets/css/Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        email: "",
        password: "",
        form: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: "", form: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formValid = true;

        if (!formData.email && !formData.password) {
            setError({
                email: "Email is required",
                password: "Password is required",
                form: "Both email and password are required."
            });
            formValid = false;
        } else if (!formData.email) {
            setError({
                ...error,
                email: "Email is required",
                form: "Email is required"
            });
            formValid = false;
        } else if (!formData.password) {
            setError({
                ...error,
                password: "Password is required",
                form: "Password is required"
            });
            formValid = false;
        } else {
            setError({
                email: "",
                password: "",
                form: ""
            });
        }

        if (formValid) {
            console.log(formData);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {error.email && <p className="error">{error.email}</p>}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {error.password && <p className="error">{error.password}</p>}

                <button type="submit"><Link to="/">Login</Link></button>
                <Link to="/SignUp">SignUp</Link>
                {error.form && <p className="error">{error.form}</p>}
            </form>
        </div >
    );
}

export default Login;
