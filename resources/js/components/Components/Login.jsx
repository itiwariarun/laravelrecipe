/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createRoot } from "react-dom/client";
import { Link, Outlet } from "react-router-dom";
import Button from "./subassets/components/Button";
import Input from "./subassets/components/Input";
import SocialButton from "./subassets/components/SocialButton";
import Socialbutton1 from "./subassets/components/Socialbutton1";
import SOcialButton2 from "./subassets/components/SOcialButton2";
import Radio from "./subassets/components/Radio";
import Heading from "./subassets/components/Heading";

function Login() {
    return (
        <div>
            <div className=" a c1">
                <Heading
                    href="#!"
                    head="Sign in to your account"
                    support=" And Start to"
                    subhead=" Order Your Delicious Food"
                />

                <div className="a1 sm:max-w-md">
                    <div className="a2">
                        <div className="a3 c1">
                            <span className="a4">Sign in with</span>
                        </div>
                        <div>
                            <div className="a5">
                                <div>
                                    <SOcialButton2 href="#!" />
                                </div>

                                <div>
                                    <Socialbutton1 href="#!" />
                                </div>

                                <div>
                                    <SocialButton href="#!" />
                                </div>
                            </div>
                            <div className="a6">
                                <div className="a7">
                                    <div className="a8" />
                                </div>
                            </div>
                        </div>
                        <div className="a9 c1">
                            <span className="a4">
                                Or Sign in With Credentials
                            </span>
                        </div>
                        <form
                            className="space-y-6"
                            action="#" /*method="POST"*/
                        >
                            <div>
                                <label htmlFor="email" className="label">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="label">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="a10">
                                <div className="b1">
                                    <Radio
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                    />
                                    <label htmlFor="remember-me" className="b2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <Link to={"/login"}>
                                <Button name="Sign in" />
                            </Link>

                            <div></div>
                        </form>
                    </div>
                    <div className="b3">
                        <div className="p-1">
                            <span className="b4">Forgot your password?</span>
                        </div>
                        <div className="p-1 text-right">
                            <span className="b5 ">
                                <span className="b6">You are new here</span>
                                <Link to={"/register"} className="b7">
                                    {" "}
                                    Sign Up ?
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
