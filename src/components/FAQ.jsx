import React from "react";
import "./FAQ.scss";
import faq from "./Data/FAQ";
import { useTranslation } from "react-i18next";

export default function FAQ() {

    const {t} = useTranslation();

    return (
        <div className="FAQ">
            <h2>English below</h2>

            <div className="questions-wrapper">
                {faq.map((question, index) => (
                    <div className="questions" key={index}>
                        <h4>{t("questions.title-question")}</h4>
                        <p>{question.question}</p>
                        <h4>{t("questions.title-answer")}</h4>
                        <p>{question.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
