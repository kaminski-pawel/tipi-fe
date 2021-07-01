import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  function calculateAge(birthday = new Date(1989, 10, 28)) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return (
    <React.Fragment>
      <button type="button" onClick={() => changeLanguage("pl")}>
        PL
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        EN
      </button>
      <h1>{t("portfolio.aboutMe.title")}</h1>
      <p>{t("portfolio.aboutMe.desc")}</p>
      <img src="https://picsum.photos/200/300" alt="pawelKam_200x300" />
      <table>
        <tbody>
          <tr>
            <td>{t("portfolio.aboutMe.name")}</td>
            <td>Paweł Kamiński</td>
          </tr>
          <tr>
            <td>{t("portfolio.aboutMe.age")}</td>
            <td>{calculateAge()}</td>
          </tr>
          <tr>
            <td>{t("portfolio.aboutMe.address")}</td>
            <td>Kołobrzeg</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default AboutMe;
