import { useState } from "react";
import "./profile.css";

export interface IListItem {
  id: number;
  title: string;
  image: string;
  titleLink: string;
}

const ListItem = (props: IListItem) => {
  const { title, image, titleLink } = props;

  return (
    <section className={`profile-item `}>
      <a href={titleLink} className="profile-item-link">
        <div className={`profile-item-icon ${props.image}`}></div>
        <h2 className="profile-item-title">{title}</h2>
      </a>
    </section>
  );
};

const Profile = () => {
  const [showMenu, setShowMenu] = useState(true);

  const profileData: IListItem[] = [
    { id: 1, image: "lnr lnr-home", title: "Home", titleLink: "/home" },
    { id: 2, image: "lnr lnr-user", title: "About Me", titleLink: "/about-me" },
    { id: 3, image: "lnr lnr-license", title: "Resume", titleLink: "/resume" },
    { id: 4, image: "lnr lnr-briefcase", title: "Portfolio", titleLink: "/portfolio" },
    { id: 5, image: "lnr lnr-envelope", title: "Contact", titleLink: "/contact" },
  ];

  return (
    <div className={`profile ${showMenu ? "profile-active" : ""}`}>
      <div
        className="profile-toggle"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <i className={`toggle-icon fa fa-arrow-left ${showMenu ? "toggle-icon-active" : ""}`}></i>
      </div>
      <div className="profile-picture">
        <h2 className="profile-picture-text">Hajnalka Richter</h2>
      </div>
      <div className="profile-menu">
        {profileData.map((profileItem: IListItem) => {
          return <ListItem key={profileItem.id} {...profileItem}></ListItem>;
        })}
      </div>
      <div className="profile-social">
        <a className="profile-icon fa fa-linkedin-square" href="https://www.linkedin.com/in/hajnalka-richter-240623260/" target="_blank"></a>
        <a className="profile-icon fa fa-facebook-square" href="https://www.facebook.com/hajnalka.richter.14/" target="_blank"></a>
      </div>
    </div>
  );
};

export default Profile;
