import React from "react";
import LinkIcon from "../../components/LinkItem";
import icoGithub from "../../assets/github.svg";
import icoProtonmail from "../../assets/protonmail.svg";
import icoLinkedin from "../../assets/linkedin.svg";
import icoTelegram from "../../assets/telegram.svg";

export default ({size}) => {
  return (
    <>
      <LinkIcon
        icon={icoLinkedin}
        color="1A72B6"
        background
        href="https://ua.linkedin.com/in/valerii-shelihan-111392156?trk=people_directory"
        rel="noopener noreferrer"
        target="_blank"
        size={size}
      />
      <LinkIcon
        icon={icoGithub}
        color="fff"
        href="https://github.com/mara1esh"
        rel="noopener noreferrer"
        target="_blank"
        size={size}
      />
      <LinkIcon
        icon={icoProtonmail}
        href="mailto:mara1esh@protonmail.com"
        color="fff"
        size={size}
      />
      <LinkIcon
        icon={icoTelegram}
        color="30A5D8"
        href="tg://resolve?domain=mara1esh"
        size={size}
      />
    </>
  );
};
