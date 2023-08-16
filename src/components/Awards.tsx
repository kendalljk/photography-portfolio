import React from "react";
import { FaAward, FaBookOpen } from "react-icons/fa";

const Awards = () => {
    return (
        <section className="w-full py-20">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-xl pb-10">Awards and Publications</h2>
                <div className="w-full flex justify-center">
                    <div className="flex flex-col items-center mx-5">
                        <div className="-rotate-12 my-5">
                            <FaAward
                                style={{
                                    color: "",
                                    fontSize: "25px",
                                }}
                            />
                        </div>
                        <h4>Award 1</h4>
                    </div>
                    <div className="flex flex-col items-center mx-5">
                        <div className="rotate-12 my-5">
                            <FaBookOpen
                                style={{
                                    color: "",
                                    fontSize: "25px",
                                }}
                            />
                        </div>
                        <h4>Publication 1</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
