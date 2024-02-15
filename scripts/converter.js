function calculate(){
    let x = document.getElementById("pounds").value;
    document.getElementById("kilos").value = x*1.2;
    console.log(x);
}

function hryvnias(){
    let elem = document.getElementById("buttontochange");
    let y = document.getElementById("hryvnias").value;
    r=y%10;
    if(r==1){
        elem.innerHTML="гривня";
    }
    else{
        if((r>1)&&(r<5)){
            elem.innerHTML="гривні";
        }
        else{
            elem.innerHTML="гривень";
        }
    }
}

function nospaces(){
    let r = document.getElementById("texttoease").value;
    var q=r[0];
    for (let i=1; i<r.length; i++){
        if(((r[i]==' ')&&(r[i+1]==' '))||((r[i]==',')&&(r[i+1]==' '))){}
        else{
            q+=r[i];
        }
    }
    document.getElementById("texttoease").value=q;
}