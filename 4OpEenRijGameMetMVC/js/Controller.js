window.addEventListener('load', () => {
    let controller = new Controller();
    //controller.init();
});

class Controller {

    constructor() {
        this.model = new Model();
        this.view = new View();
        this.view.bindSpeelveld(this.handlerSpeelveld)
    }

    handlerSpeelveld = id => {
        let vakjeString = id.replace('vakje', '');
        let vakjeNumber = Number(vakjeString);
        let kolom = vakjeNumber % 7;
        let playerChange = document.getElementById("playerchange").innerText;
        console.log(kolom);
        const result = this.model.magZet(kolom);
        this.view.toonModel(this.model.getModel());

        if (result && playerChange === "Player1") {
            console.log('fiche geplaatst');
            document.getElementById("playerchange").innerText = "Player2";
            console.log("player1");
        } else {
            console.log('kolom vol');
        }

        if (result && playerChange === "Player2") {
            console.log('fiche geplaatst');
            console.log("player2");
            document.getElementById("playerchange").innerText = "Player1";
        } else {
            console.log("kolom vol");
        }
    }

}