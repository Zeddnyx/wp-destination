let quanti = 0;
document.getElementById("plus").onclick = function(){
	quanti+=1;
    document.getElementById("quantity").innerHTML = quanti;
}

document.getElementById("minus").onclick = function(){
	if(quanti == 0){
		quanti-=0;
	}
	else{
		quanti-=1;
	}
    document.getElementById("quantity").innerHTML = quanti;
}