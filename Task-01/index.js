

let df = document.getElementById("defination");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let marks=0;
let flag, r;

let dfs = ["A writting tools", "A Source of knowledge","An electronic device that manipulates information, or data", "Father of electricity","Biggest mangrove forest in asia", "The writer of or national anthem", "Who is known as Bengal Tiger","Shor form of Daffodil Internation University","Heaven of the earth", "The CEO of SpaceX"]

    r = Math.floor(Math.random()*10);
    df.value= dfs[r];


btn.onclick = function() {

    df.value= dfs[r];
    let phase = df.value;
    let valueOf = dfs.findIndex(checkIndex);
    console.log(valueOf);

    function checkIndex (dfs){

        return dfs==phase;

    }

    if (valueOf == 0 && inp.value=="pen"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 1 && inp.value=="book"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 2 && inp.value=="computer"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 3 && inp.value=="Michael Faraday"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 4 && inp.value=="Sundarbans"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 5 && inp.value=="Rabindranath Tagore"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 6 && inp.value=="Ak Fazlul Haque"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 7 && inp.value=="DIU"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 8 && inp.value=="Switzerland"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else if(valueOf == 9 && inp.value=="Elon Musk"){
        marks++;
        alert(`You are correct. Your marks is: ${marks}`);
    }else {
        alert(`You are wrong. Your marks is: ${marks}`);
        marks = 0;
    }

    r = Math.floor(Math.random()*10);
    df.value= dfs[r];
    inp.value = "";
};

