const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTPUSER,
  password: process.env.FTPPASS,
  host: "files.000webhost.com",
  port: 21,
  localRoot: __dirname + "/dist/dots/",
  remoteRoot: "/public_html",
  include: ["*"],
  deleteRemote: true,
  forcePasv: true
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => {
    console.error(err);
    process.exit()
  });
