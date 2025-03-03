import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
    return(
        <div className="flex p-3">
            <FaInstagram className="size-5 mx-2"/>
            <FaTwitter className="size-5 mx-2"/>
            <FaFacebookF className="size-5 mx-2"/>
            <FaLinkedin className="size-5 mx-2"/>
        </div>
    )
};
export default SocialLinks