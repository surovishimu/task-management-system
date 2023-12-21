import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";



const SocialLogin = () => {
    const navigate = useNavigate()
    const { googleLogin } = useContext(AuthContext);
    const handleSocialLogin = (media) => {
        media()
            .then(() => {

                toast.success('User logged in successfully');
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <>
            <div className="divider"></div>
            <div className="mb-4 flex justify-center">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn  md:text-lg text-sm normal-case btn-outline hover:bg-sky-700 hover:border-none"><img className="h-7" src="https://i.ibb.co/J3yZt7b/google.png" alt="" />Continue with Google
                </button>
            </div>
        </>
    );
};

export default SocialLogin;