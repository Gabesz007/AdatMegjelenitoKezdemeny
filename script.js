console.log("helló")
// CRUD 
const adatok =[
    {id:"ID",nev:"Név", faj:"Faj", ar:"Ár", szin:"Szín", muveletek:"Műveletek"},
    {id:1,nev:"Micike", faj:"macska", ar:"1000", szin:"cirmos", muveletek:"Szerkesztés/Törlés"},
    {id:2,nev:"Lune", faj:"macska", ar:"500", szin:"cirmos", muveletek:"Szerkesztés/Törlés"},
    {id:3,nev:"Macsa", faj:"macska", ar:"2000", szin:"cirmos", muveletek:"Szerkesztés/Törlés"}
]
const oszlopok=["nev", "faj", "ar","szin", "muveletek"]

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
                    // head=document.createElement('div')
                    // head.className="Headline"
                    // head.innerHTML="Szia!"
                    oszlop=document.createElement('div')
                    oszlop.className="col"
                    // oszlop.appendChild(head)
                    oszlop.innerHTML=allat[mezoNev]
                    sor.appendChild(oszlop)  
                }
            )

                    

            $('.container').appendChild(sor)
        }

    )

    

}

rendel()