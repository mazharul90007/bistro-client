import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    // const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log('state in the location login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //SignIn Function
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "User LogIn Successful",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                    
                });
                navigate(from, {replace:true});
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Handle Validate Button
    const handleValidateCaptcha = (e) => {
        const user_Captcha_Value = e.target.value;
        if (validateCaptcha(user_Captcha_Value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro | LogIn</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text"
                                    placeholder="Type Captcha"
                                    // ref={captchaRef}
                                    name="captcha"
                                    className="input input-bordered"
                                     />
                                {/* <button className="btn btn-xs mt-2">Validate</button> */}
                            </div>
                            <div className="form-control mt-6">
                                {/* TODO: apply disabled for recaptcha */}
                                <input disabled={false} className="btn btn-primary" type='submit' value="Login"></input>
                            </div>
                            <p className=''><small>New Here? <Link to={'/signup'}>Create an Account</Link></small></p>
                            <div className="divider">OR</div>
                            {/* Google Login */}
                            <SocialLogin></SocialLogin>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;