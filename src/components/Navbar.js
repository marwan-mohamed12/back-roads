import logo from "../images/logo.svg";
import { socialLinks, pageLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button
                        type="button"
                        className="nav-toggle"
                        id="nav-toggle"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((pageLink) => {
                        const { id } = pageLink;
                        return (
                            <PageLink
                                key={id}
                                {...pageLink}
                                linkClass="nav-link"
                            />
                        );
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((socialLink) => {
                        const { id } = socialLink;
                        return (
                            <SocialLink
                                key={id}
                                {...socialLink}
                                linkClass="nav-icon"
                            />
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
