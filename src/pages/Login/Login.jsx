import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import BtnSpinner from "../../components/Shared/BtnSpinner";
import Swal from "sweetalert2";
import { saveUserDb } from "../../utility/utility";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { signIn, signInWithGoogle, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    if (user) return <Navigate to={from} replace={true} />;

    // Handle form submission
    const onSubmit = async (data) => {
        const { email, password } = data;
        setLoading(true)
        try {
            await signIn(email, password);
            navigate(from, { replace: true });
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false)
        } catch (err) {
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err,

            });
        }
    };

    // Handle Google Sign-in
    const handleGoogleSignIn = async () => {
        setLoading(true)
        try {
            const data = await signInWithGoogle();
            await saveUserDb(data?.user)
            navigate(from, { replace: true });
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err,

            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <Helmet>
                <title> SignIn | Medical Camp Management System</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign In</h1>
                    <p className="text-sm text-gray-400">Sign in to access your account</p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter Your Email Here"
                                className="w-full px-3 py-2 border rounded-md border-primary focus:outline-blue-900 bg-gray-200 text-gray-900"
                            />
                            {errors.email && (
                                <p className="text-red text-xs mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                        message:
                                            "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long.",
                                    },
                                })}
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-primary focus:outline-blue-900 bg-gray-200 text-gray-900"
                            />
                            {errors.password && (
                                <p className="text-red text-xs mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-primary w-full rounded-md py-3 text-white"
                        >
                            {loading ? (
                                <BtnSpinner />
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </div>
                </form>

                <div className="space-y-1">
                    <button className="text-xs hover:underline hover:text-primary text-gray-400">
                        Forgot password?
                    </button>
                </div>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-400">
                        Login with social accounts
                    </p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>

                <div
                    onClick={handleGoogleSignIn}
                    className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded cursor-pointer"
                >
                    <FcGoogle size={32} />
                    <p>Continue with Google</p>
                </div>

                <p className="px-6 text-sm text-center text-gray-400">
                    Don&apos;t have an account yet?{" "}
                    <Link
                        to="/signup"
                        className="hover:underline hover:text-primary text-primary"
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Login;
