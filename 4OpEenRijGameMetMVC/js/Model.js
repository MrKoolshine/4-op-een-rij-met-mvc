class Model
{

    constructor()
    {
        this.vakjes = new Array(6);

        for(let i = 0; i < 6; i++)
        {
            this.vakjes[i] = new Array(7);

        }
        this.leegVakjes();
    }

    leegVakjes()
    {
        for(let rij=0;rij<=5;rij++)
        {
            for(let kolom=0;kolom<=6;kolom++)
            {
                this.vakjes[rij][kolom]="leeg";
            }
        }
    }

    magZet(kolom)
    {
        let playerChange = document.getElementById("playerchange").innerText;

        for(let rij=5;rij>=0;rij--)
        {
            if(this.vakjes[rij][kolom] === "leeg")
            {
                if(playerChange === "Player1"){
                    this.vakjes[rij][kolom]="rood";
                    return true;
                }
                else{
                    this.vakjes[rij][kolom]="geel";
                    return true;
                }
            }
        }
        return false;
    }

    playerWin(){

    }

    getModel()
    {
        return this.vakjes;
    }

}