import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiGraphql,
  SiNodeDotJs,
  SiMongodb,
  SiNpm,
  SiMeteor,
  SiApachecordova,
  SiElectron,
  SiJest,
  SiMocha,
  SiSocketDotIo,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiDotNet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiCplusplus,
  SiGo,
  SiLinux,
  SiNginx,
  SiApache,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiDocker,
  SiDigitalocean,
  SiVultr,
  SiAzuredevops,
  SiAtom,
} from "react-icons/si";

const icons = [
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiGraphql,
  SiNodeDotJs,
  SiMongodb,
  SiNpm,
  SiMeteor,
  SiApachecordova,
  SiElectron,
  SiJest,
  SiMocha,
  SiSocketDotIo,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiDotNet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiCplusplus,
  SiGo,
  SiLinux,
  SiNginx,
  SiApache,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiDocker,
  SiDigitalocean,
  SiVultr,
  SiAzuredevops,
  SiAtom,
];

let myIcons = [];

for (let i = 0; i < icons.length; i++) {
  let theFun = icons[i];
  let toStr = icons[i].name
    .slice(2)
    .replace(/dot/gi, ".")
    .replace(/sharp/gi, "#")
    .replace(/microsoft/gi, "")
    .replace(/plus/gi, "+");

  let newOb = { functio: theFun, name: toStr };
  myIcons = [...myIcons, newOb];
}

export default myIcons;
