var CogToken = artifacts.require("./CogToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CogToken);
};
