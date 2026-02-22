import React from "react";
import "./FAQ.scss";
import faq from "./Data/FAQ";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faComment } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
    const { t } = useTranslation();

    return (
        <div className="FAQ">
            <h1>{t("nav.faq")}</h1>
            <div className="questions-wrapper">
                {faq.map((question, index) => (
                    <div className="questions" key={index}>
                        <p className="question-text">{t(question.question)}</p>
                        <h4>{/*{t("questions.title-answer")}*/} <FontAwesomeIcon icon={faComment} /></h4>
                        <p className="answer-text">{t(question.answer)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}