"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
    const [state, handleSubmit] = useForm("mleybqyo");
    if (state.succeeded) {
        return (
            <section className="min-h-screen w-full">
                <div className="pt-20">
                    <p>{`Thanks for reaching out! I'll reach out to you via email soon.`}</p>
                </div>
            </section>
        );
    }
    return (
        <section className="min-h-screen w-full flex justify-center">
            <div className="flex flex-col pt-20 w-1/2">
                <h2 className="mx-auto mb-5">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="block border-2 w-full mb-5"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="telephone">Phone number:</label>
                    <input
                        id="telephone"
                        type="tel"
                        name="telephone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                        className="block border-2 w-full mb-5"
                    />
                    <ValidationError
                        prefix="telephone"
                        field="telephone"
                        errors={state.errors}
                    />
                    <label htmlFor="email">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        className="block border-2 w-full mb-5 h-1/2"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="block border-2 mx-auto"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
