const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const Web3 = require("web3");
const { contractABI, contractAddress } = require("./utils/constants");

/* app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
}); */

app.use("/", express.static("client/build"));

app.use("/diploma", require("./routes/diploma"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

/* app.get("/:matricule", async (req, res) => {
    const web3 = new Web3(
        new Web3.providers.HttpProvider("http://127.0.0.1:8545")
    );
    const certifs = new web3.eth.Contract(contractABI, contractAddress);
    const diplomes = await certifs.methods
        .getDiplome(req.params.matricule)
        .call();
    let results = { nbr: diplomes.nbr, diplome: [] };
    diplomes.diplome.forEach((diplome) => {
        results.diplome.push({
            id: diplome.id,
            nom_univesrite: diplome.nom_univesrite,
            mat_etudiant: diplome.mat_etudiant,
            nom_etudiant: diplome.nom_etudiant,
            prenom_etudiant: diplome.prenom_etudiant,
            date_naissance: diplome.date_naissance,
            lieu_naissance: diplome.lieu_naissance,
            date: diplome.date,
            niveau: diplome.niveau,
            domaine: diplome.domaine,
            filiere: diplome.filiere,
            specialite: diplome.specialite,
            departement: diplome.departement,
            avisUniversite: diplome.avisUniversite,
            avisMinistere: diplome.avisMinistere,
        });
    });
    res.send(results);
}); */

app.listen(port, () => {
    console.log("connected");
});
