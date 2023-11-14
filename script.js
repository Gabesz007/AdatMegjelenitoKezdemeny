console.log("helló")
// CRUD 
const adatok =[
    {id:1,nev:"Micike", faj:"macska", ar:"1000", szin:"cirmos"},
    {id:2,nev:"Lune", faj:"macska", ar:"500", szin:"cirmos"},
    {id:3,nev:"Macsa", faj:"macska", ar:"2000", szin:"cirmos"}
]
const oszlopok=["nev", "faj", "ar","szin"]

function $(mit){
    vissza=document.querySelectorAll(mit)
    if (vissza.length==1) return vissza[0]
    return vissza
}
function rendel(){
    adatok.forEach(

        function(allat){
            sor=document.createElement('div')
            sor.className="row"

            oszlopok.forEach(
                function(mezoNev){
                    oszlop=document.createElement('div')
                    oszlop.className="col"
                    oszlop.innerHTML=allat[mezoNev]
                    sor.appendChild(oszlop)  
                }
            )

                    

            $('.container').appendChild(sor)
        }

    )

    

}

rendel()