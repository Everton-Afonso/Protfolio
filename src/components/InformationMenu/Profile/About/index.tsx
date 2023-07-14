import { data } from "../../../../information";
import { maskPhone } from "../../../../utils";

import "./styles.scss";

interface dataPros {
  title: string;
  description: string;
}

export const About = () => {
  return (
    <section className="container-about content-space">
      {data.map((item: dataPros, index: number) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
            <p>
              {item.title === "whatsapp:" ? (
                <a
                  href={`https://api.whatsapp.com/send?phone=55${item.description}`}
                  target="_blank"
                >
                  {maskPhone(item.description)}
                </a>
              ) : (
                item.description
              )}
            </p>
          </div>
        );
      })}
    </section>
  );
};
