let count =0;

document.getElementById('decbtn').onclick =function(){
    count-=1;
    document.getElementById('countlbl').innerHTML = count;
}

document.getElementById('resetbtn').onclick =function(){
    count=0;
    document.getElementById('countlbl').innerHTML = count;
}

document.getElementById('incbtn').onclick =function(){
    count+=1;
    document.getElementById('countlbl').innerHTML = count;
}