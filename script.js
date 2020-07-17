function click1(val){

    
    document.getElementById('screen').value += val 
}

function clear1()
{
    document.getElementById('screen').value=""
}

function equalclick()
{
    text = document.getElementById('screen').value
    res = eval(text)
    document.getElementById('screen').value = res 
}