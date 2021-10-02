function stopCount(f)
{
    clearInterval(f);
}
function startCount(vals)
{
    var f=setInterval(function(){
        document.getElementById('cvalue').innerHTML=vals;
        vals--;
        if(vals<0)
        {
            document.getElementById('btn').value="Start count";
            document.getElementById('inputValue').value=0;
            stopCount(f);
        }
    }, 1000);
}

function start1(){
    var tep=document.getElementById('inputValue');
    var vals=Number(tep.value);
    document.getElementById('btn').value="processing..";
    startCount(vals);
    
}