"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
    return (
        <section className="min-h-screen w-full pt-20 flex justify-center">
            <div>
                <h2>Contact</h2>
                <form className="flex flex-col">
                    <label>
                        Full Name:
                        <input type="text" className="border-2 m-2" />
                    </label>
                    <label>
                        Email:
                        <input type="text" className="border-2 m-2" />
                    </label>
                    <label>
                        Message
                        <textarea className="border-2 m-2" />
            </label>
            <button>Submit</button>
                </form>
            </div>
        </section>
    );
}
