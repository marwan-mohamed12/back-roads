const SocialLink = ({ id, href, icon, linkClass }) => {
    return (
        <li>
            <a
                href={href}
                target="_blank"
                className={linkClass}
                rel="noreferrer"
            >
                <i className={icon}></i>
            </a>
        </li>
    );
};
export default SocialLink;
