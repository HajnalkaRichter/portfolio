import facebook from "../Assest/Images/facebook.png";
import instagram from "../Assest/Images/instagram.png";
import linkedIn from "../Assest/Images/indeed.png";

import './profile.css';

export interface IListItem {
    id: number;
    title: string;
    image: string; 
    titleLink: string;
}

const ListItem = (props: IListItem) => {
    const {title, image, titleLink} = props;

    return (
        <section className={`profile-item `}>
                <div className={`profile-item-icon ${props.image}`}></div>
                <a href={titleLink} className="profile-item-link">
                    <h2 className="profile-item-title">{title}</h2>
                </a>
        </section>
    )
}

const Profile = () => {
    const profileData: IListItem[] = [
      {id: 1, image: "lnr lnr-home", title: "Home", titleLink:"/home"},
      {id: 2, image: "lnr lnr-user", title: "About Me", titleLink:"/about-me"},
      {id: 3, image: "lnr lnr-license", title: "Resume", titleLink:"/resume"},
      {id: 4, image: "lnr lnr-briefcase", title: "Portfolio", titleLink:"/portfolio"},
      {id: 5, image: "lnr lnr-envelope", title: "Contact", titleLink:"/contact"}
    ];

    return (<div className="profile">
        <div className="profile-picture">
            <h2 className="profile-picture-text">Hajnalka Richter</h2>
        </div>
        <div className="profile-menu">
            {profileData.map((profileItem: IListItem) => {
                return <ListItem {...profileItem}></ListItem>
            })}
        </div>
        <div className="profile-social">
            <img src={instagram} alt="" className="profile-social-instagram"/>
            <img src={facebook} alt="" className="profile-social-facebook"/>
            <img src={linkedIn} alt="" className="profile-social-linkedIn"/>
        </div>
    </div>
    )
}


export default Profile;