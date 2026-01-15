import { useState } from "react";
import api from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";


const Login =()=>{
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({...form, 
            [name]: value
        })
    }
    const handleLogin = async(e) =>{
        try{
            e.preventDefault();
             const res = await api.post("/Account/Login", form);
             localStorage.setItem("token", res.data.result.accessToken);
             localStorage.setItem("RefreshToken", res.data.refreshToken);

             navigate("/")
            console.log(res);
         }
        catch(err){
            console.log("Login Error: ", err);
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-blue-500">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>


                <input className="w-full p-2 mb-3 border rounded-lg" type="email" placeholder="Email" name="email" onChange={handleChange} />
                <input className="w-full p-2 mb-6 border rounded-lg" type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200" type="submit">Login</button>
                </form>

                <p className="text-sm text-center mt-2">Don't have an account!<span className="text-blue-600 cursor-pointer ml-1"><Link to={"/Register"}>Register</Link></span></p>
            </div>

        </div>
    )
}

export default Login;

