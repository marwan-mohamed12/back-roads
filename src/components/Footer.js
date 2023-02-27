import { socialLinks, pageLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
function Footer() {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map((pageLink) => {
                    const { id } = pageLink;
                    return (
                        <PageLink
                            key={id}
                            {...pageLink}
                            linkClass="footer-link"
                        />
                    );
                })}
            </ul>
            <ul className="footer-links">
                {socialLinks.map((socialLink) => {
                    const { id } = socialLink;
                    return (
                        <SocialLink
                            key={id}
                            {...socialLink}
                            linkClass="footer-icon"
                        />
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights
                reserved
            </p>
        </footer>
    );
}
export default Footer;
