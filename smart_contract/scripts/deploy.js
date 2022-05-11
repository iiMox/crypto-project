const main = async () => {
    const Certif = await hre.ethers.getContractFactory("Certif");
    const certif = await Certif.deploy();

    await certif.deployed();

    console.log("Certif deployed to:", certif.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

runMain();
