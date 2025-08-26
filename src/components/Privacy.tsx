import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "FR" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
