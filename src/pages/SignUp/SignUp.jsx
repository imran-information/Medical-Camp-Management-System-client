import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { uploadImage } from "../../utility/utility";
import BtnSpinner from "../../components/Shared/BtnSpinner";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Form submission handler
    const onSubmit = async (data) => {
        setLoading(true)
        const { name, email, password, image } = data;

        try {
            // Upload the user image
            const imageUrl = await uploadImage(image[0]);

            // Create user account
            const result = await createUser(email, password);

            // Update user profile with name and image URL
            await updateUserProfile(name, imageUrl);
            setLoading(false)
            console.log(result);
            navigate("/");
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "SignUp Successfully",
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

    // Google Sign-In handler
    const handleGoogleSignIn = async () => {
        setLoading(true)
        try {
            await signInWithGoogle();
            navigate("/");
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "SignUp Successfully",
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
            <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm text-gray-400">Welcome to (MCMS)</p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Enter Your Name Here"
                                className="w-full px-3 py-2 border rounded-md border-primary focus:outline-blue-900 bg-gray-200 text-gray-900"
                            />
                            {errors.name && (
                                <p className="text-red text-xs mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm">
                                Select Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                {...register("image", { required: "Image is required" })}
                                accept="image/*"
                                className="w-full"
                            />
                            {errors.image && (
                                <p className="text-red text-xs mt-1">{errors.image.message}</p>
                            )}
                        </div>

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
                                <p className="text-red text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm mb-2">
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
                                "Register now"
                            )}
                        </button>
                    </div>
                </form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-400">Signup with social accounts</p>
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
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="hover:underline hover:text-primary text-primary"
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignUp;
