class View
{
    constructor() {
        this.speelveld=document.querySelectorAll('#vakjesVeld > section');
        console.log(this.speelveld);
    }
    toonModel(model)
    {
        let teller=0
        console.log(model);
        this.speelveld.forEach(element => {
                if(model[Math.floor(teller/7)][teller%7]==="leeg")
                {
                    console.log("wit");
                    element.setAttribute('style','background-color:white');
                }

                if(model[Math.floor(teller/7)][teller%7]==="geel") {
                    element.setAttribute('style', 'background-color:yellow');
                }

                if(model[Math.floor(teller/7)][teller%7]==="rood") {
                     element.setAttribute('style', 'background-color:red');
                }

                teller++;
            });
        }

    bindSpeelveld(handler)
    {
        this.speelveld.forEach(element => element.addEventListener('click', event => {
            handler(element.id);
        }));
    }
}