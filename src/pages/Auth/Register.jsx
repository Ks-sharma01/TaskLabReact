import api from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = async(e) =>{
        try{
            e.preventDefault();
            const res = await api.post("/Account/Register", form);
            console.log(res);
            navigate("/Login")
        }
        catch(err){
            console.log("Registration Error: ", err);
        }
    }
    return(
       <div className="min-h-screen flex items-center justify-center bg-blue-500">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleLogin}>

                <input className="w-full p-2 mb-3 border rounded-lg" type="text" placeholder="Name" name="name" onChange={handleChange}/>
                <input className="w-full p-2 mb-3 border rounded-lg" type="email" placeholder="Email" name="email" onChange={handleChange} />
                <input className="w-full p-2 mb-6 border rounded-lg" type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200" type="submit" onClick={handleLogin}>Register</button>
                </form>

                <p className="text-sm text-center mt-2">Already have an account!<span className="text-blue-600 cursor-pointer ml-1"><Link to={"/Login"}>Login</Link></span></p>
            </div>

        </div>
    )
}

export default Register;