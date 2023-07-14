import { data } from "../../../data";

import { About } from "./About";
import { Skills } from "./Skills";
import "./styles.scss";

export const Profile = () => {
  const { avatar, name, designation, links } = data;
  return (
    <section className="container-profile">
      <section className="content-profile">
        <div className="user-avatar">
          <img src={avatar} alt="User avatar" />
        </div>

        <div className="description">
          <p>{name}</p>
          <span>{designation}</span>
        </div>

        <section className="social-icon">
          {links.map((item, index) => {
            return (
              <a href={item.redirect} key={index} target="_blank">
                {item.icon}
              </a>
            );
          })}
        </section>

        <About />

        <Skills />
      </section>
    </section>
  );
};
