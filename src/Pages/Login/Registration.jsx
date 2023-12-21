import { useContext } from "react";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from "../../../public/image/signup.png"
import SocialLogin from "./Social";
import { AuthContext } from "../../Provider/AuthProvider";



const Registration = () => {
    const { createUser, handleUpdateprofile } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const img = form.img.value;
        const password = form.password.value;
        console.log(name, email, img, password)

        if (password.length < 6) {
            toast.error('password must be at least 6 carecters');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters');
            return;
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error('Your password should have at least one special character');
            return;
        }

        createUser(email, password)
            .then(() => {
                handleUpdateprofile(name, img)
                    .then(() => {
                        toast.success('user created succesfully');
                        navigate('/')
                    })
            }

            )
            .catch(error => toast.error(error.message))

    }
    return (

        <>

            <div className="hero min-h-screen pt-20">
                <div>
                    <div className="hero-content  ">
                        <div>
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:ml-10 md:ml-10 -ml-2">
                            <form onSubmit={handleSignUp} className="card-body">
                              
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name='img' placeholder="image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type='password' name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn bg-sky-700 text-white hover:bg-sky-700  text-lg">Sign Up</button>
                                </div>


                            </form>
                            <span className="flex justify-center items-center gap-2">
                                Already have an account?{' '}
                                <Link to={"/login"}><button className="text-sky-500 text-sm font-bold"

                                >
                                    LogIn
                                </button></Link>
                            </span>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

            </div></>


    );
};

export default Registration;