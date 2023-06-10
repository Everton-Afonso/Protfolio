import { data } from "../../../data";

import { About } from "./About";
import "./styles.scss";

export const Profile = () => {
  const { avatar, name, designation, city, email, phone, residence } = data;
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
          <a href="">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNGRkI0MDAiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzJfNDU2KSI+CjxwYXRoIGQ9Ik0xMy4xNjY4IDEyLjg3NDhIMTQuNjI1MkwxNS4yMDg1IDEwLjU0MTVIMTMuMTY2OFY5LjM3NDg0QzEzLjE2NjggOC43NzQgMTMuMTY2OCA4LjIwODE3IDE0LjMzMzUgOC4yMDgxN0gxNS4yMDg1VjYuMjQ4MTdDMTUuMDE4MyA2LjIyMzA5IDE0LjMwMDIgNi4xNjY1IDEzLjU0MTkgNi4xNjY1QzExLjk1ODIgNi4xNjY1IDEwLjgzMzUgNy4xMzMwOSAxMC44MzM1IDguOTA4MTdWMTAuNTQxNUg5LjA4MzVWMTIuODc0OEgxMC44MzM1VjE3LjgzMzJIMTMuMTY2OFYxMi44NzQ4WiIgZmlsbD0iIzJCMkIyQiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzJfNDU2Ij4KPHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA1KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
              alt="Social Icon"
            />
          </a>
          <a href="">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNGRkI0MDAiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzJfNDU2KSI+CjxwYXRoIGQ9Ik0xMy4xNjY4IDEyLjg3NDhIMTQuNjI1MkwxNS4yMDg1IDEwLjU0MTVIMTMuMTY2OFY5LjM3NDg0QzEzLjE2NjggOC43NzQgMTMuMTY2OCA4LjIwODE3IDE0LjMzMzUgOC4yMDgxN0gxNS4yMDg1VjYuMjQ4MTdDMTUuMDE4MyA2LjIyMzA5IDE0LjMwMDIgNi4xNjY1IDEzLjU0MTkgNi4xNjY1QzExLjk1ODIgNi4xNjY1IDEwLjgzMzUgNy4xMzMwOSAxMC44MzM1IDguOTA4MTdWMTAuNTQxNUg5LjA4MzVWMTIuODc0OEgxMC44MzM1VjE3LjgzMzJIMTMuMTY2OFYxMi44NzQ4WiIgZmlsbD0iIzJCMkIyQiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzJfNDU2Ij4KPHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA1KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
              alt="Social Icon"
            />
          </a>
        </section>

        <section className="content-space">
          <About
            email={email}
            phone={phone}
            residence={residence}
            city={city}
          />
        </section>
      </section>
    </section>
  );
};
