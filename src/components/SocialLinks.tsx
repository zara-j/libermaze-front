import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 text-gray-600">
      <FaInstagram className="hover:text-pink-500 cursor-pointer size-6" />
      <FaTwitter className="hover:text-blue-400 cursor-pointer size-6" />
      <FaFacebookF className="hover:text-blue-600 cursor-pointer size-6" />
      <FaLinkedin className="hover:text-blue-700 cursor-pointer size-6" />
    </div>
  );
};

export default SocialLinks;
