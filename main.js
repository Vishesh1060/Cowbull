let old=[];
let word="chair"
let i=0,j=0,bull=[],cow=[];



let fn1= function() {
    event.preventDefault();
    let x2 = document.getElementById("fr1");
    old.push(String(x2.input1.value))
    let s2=new Set(String(x2.input1.value));
    let s=new Set(word);
    j=0;
    let x=[...s2];  
    bull[i]=0;
    cow[i]=0;
    for(let x of old[i]){
        if(x===word.charAt(j)){
            bull[i]=bull[i]+1;
        }else if(s.has(x)){
            cow[i]=cow[i]+1;
            s.delete(x);   
        }
        j++;
    }
    if(bull[i]===5){document.getElementById("title").innerHTML="Well done!!";}
    document.getElementById("old").innerHTML = old;
    document.getElementById("bull").innerHTML = bull;
    document.getElementById("cow").innerHTML=cow;
    i++;
}
