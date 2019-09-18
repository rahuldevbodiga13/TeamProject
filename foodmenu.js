
function decrement(){
    var qty=parseInt(document.getElementById('quantity1').innerHTML);
    if(qty>0){
    qty-=1;
    document.getElementById('quantity1').innerHTML=qty;
    }
}

function increment(id1){
    var qty=parseInt(document.getElementById('quantity1').innerHTML);
    qty+=1;
    document.getElementById('quantity1').innerHTML=qty;

}