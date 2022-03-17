


let calculator = document.querySelector(".containerThree .contentOne .cal");
calculator.addEventListener("click", function () {
    console.log("cliked");
    

    let curone = Number(document.querySelector(".contentOne .curone").value);
    let curoneCR = Number(document.querySelector(".contentOne .curoneCR").value);
    let curonetoInrans = curone * curoneCR;
    let curonetoinr = document.querySelector(".contentOne .curonetoInr").value = curonetoInrans;

    let curtwo = Number(document.querySelector(".contentTwo .curtwo").value);
    let curtwoCR = Number(document.querySelector(".contentTwo .curtwoCR").value);
    let curtwotoInrans = curtwo * curtwoCR;
    let curtwotoinr = document.querySelector(".contentTwo .curtwotoInr").value = curtwotoInrans;

    let curthree = Number(document.querySelector(".contentThree .curthree").value);
    let curthreeCR = Number(document.querySelector(".contentThree .curthreeCR").value);
    let curthreetoInrans = curthree * curthreeCR;
    let curthreetoinr = document.querySelector(".contentThree .curthreetoInr").value = curthreetoInrans;

    let curfour = Number(document.querySelector(".contentFour .curfour").value);
    let curfourCR = Number(document.querySelector(".contentFour .curfourCR").value);
    let curfourtoInrans = curfour * curfourCR;
    let curfourtoinr = document.querySelector(".contentFour .curfourtoInr").value = curfourtoInrans;
    
    let curfive = Number(document.querySelector(".contentFive .curfive").value);
    let curfiveCR = Number(document.querySelector(".contentFive .curfiveCR").value);
    let curfivetoInrans = curfive * curfiveCR;
    let curfivetoinr = document.querySelector(".contentFive .curfivetoInr").value = curfivetoInrans;
    
    let cursix = Number(document.querySelector(".contentSix .cursix").value);
    let cursixCR = Number(document.querySelector(".contentSix .cursixCR").value);
    let cursixtoInrans = cursix * cursixCR;
    let cursixtoinr = document.querySelector(".contentSix .cursixtoInr").value = cursixtoInrans;
    
    
    
    
    // Total 
    let totalInrans = curonetoinr + curtwotoinr + curthreetoinr + curfourtoinr + curfivetoinr + cursixtoinr;
    document.querySelector(".containerThree .contentTwo .totalofInr").value = totalInrans;



});


let usdflag = document.querySelector(".sectionTwo .containerOne .usdFlag").addEventListener("click", function () {
    console.log("wait");
    document.querySelector(".sectionTwo .containerTwo iframe").src = "https://in.investing.com/currencies/usd-inr";  
})
let audflag = document.querySelector(".sectionTwo .containerOne .audFlag").addEventListener("click", function () {
    console.log("wait2");
    document.querySelector(".sectionTwo .containerTwo iframe").src = "https://in.investing.com/currencies/aud-inr";  
})
let cadflag = document.querySelector(".sectionTwo .containerOne .cadFlag").addEventListener("click", function () {
    console.log("wait2");
    document.querySelector(".sectionTwo .containerTwo iframe").src = "https://in.investing.com/currencies/cad-inr";  
})
let euroflag = document.querySelector(".sectionTwo .containerOne .euroFlag").addEventListener("click", function () {
    console.log("wait2");
    document.querySelector(".sectionTwo .containerTwo iframe").src = "https://in.investing.com/currencies/eur-inr";  
})
let gbflag = document.querySelector(".sectionTwo .containerOne .gbpFlag").addEventListener("click", function () {
    console.log("wait2");
    document.querySelector(".sectionTwo .containerTwo iframe").src = "https://in.investing.com/currencies/gbp-inr";  
})











