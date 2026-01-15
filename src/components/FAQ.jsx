import React from "react";
import "./FAQ.scss";
import faq from "./Data/FAQ";

export default function FAQ() {
    return (
        <div className="FAQ">
            <h2>
                English below
            </h2>

            {
                faq.map((question) => (
                    <div className="questions">
                        <h4>Q</h4>
                        <p>{question.question}</p>
                        <h4>R</h4>
                        <p>{question.answer}</p>
                    </div>
                ))
            }

        </div>
    );
}