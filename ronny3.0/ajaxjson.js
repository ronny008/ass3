function change(){
    console.log("btn clicked");
    //step 1
    var xhttp=new XMLHttpRequest();
    //step 2
    xhttp.open("GET","data.json",true);
    //step 3
    xhttp.send();
    //step 4
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&& this.status==200){
            console.log(this.responseText);
        var data=JSON.parse(this.responseText)
        let val="";
        for(let i=0;i<data.length;i++){
            val +=`<li>${data[i].name}<li>${data[i].age}</li>`
            document.getElementById('text').innerHTML=val
        }
    }
}
}
