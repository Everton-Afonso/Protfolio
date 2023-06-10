import { useEffect, useState } from "react";

import { en_us, pt_br } from "../../../../languages";

import "./styles.scss";
import useLocalStorage from "../../../../hooks/useLocalStorage";

interface AboutProd {
  email: string;
  phone: string;
  residence: string;
  city: string;
}

export const About = ({ email, phone, residence, city }: AboutProd) => {
  const [contactTeste, setContactTeste] = useState<string>("");
  const [residenceteste, setResidenceTeste] = useState<string>("");
  const { value, updateLocalStorage } = useLocalStorage("data", "pt_br");

  const handleLanguageCheck = () => {
    if (value === "pt_br") {
      updateLocalStorage("en_us");
      return;
    }
    updateLocalStorage("pt_br");
  };

  const handleLanguageChange = (typeLanguages: string) => {
    if (typeLanguages === "pt_br") {
      setContactTeste(pt_br.contact);
      setResidenceTeste(pt_br.country);
    } else {
      setContactTeste(en_us.contact);
      setResidenceTeste(en_us.country);
    }
  };

  useEffect(() => {
    handleLanguageChange(value);
  }, [value]);

  return (
    <section className="container-about">
      <label className="switch-language">
        <input
          type="checkbox"
          onChange={handleLanguageCheck}
          checked={value === "en_us"}
        />
        <span className="slider"></span>
      </label>
      <div>
        <p>Email:</p>
        <p>{email}</p>
      </div>
      <div>
        <p>{contactTeste}</p>
        <p>{phone}</p>
      </div>
      <div>
        <p>{residenceteste}</p>
        <p>{residence}</p>
      </div>
      <div>
        <p>Cidade:</p>
        <p>{city}</p>
      </div>
    </section>
  );
};
