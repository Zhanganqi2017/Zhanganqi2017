var newsi = 0;
    var txti = 0;
    var txttimer;     
    var newstimer;   
    var newstitle = new Array();          
    newstitle[0] = "欢迎来到我的博客";       
    function shownew(){
        hwnewstr=newstitle[newsi];              
        if(txti>=hwnewstr.length){
            clearInterval(txttimer);   
            clearInterval(newstimer);  
            txti = 0;    
            return;
        }
        clearInterval(txttimer);   
        document.getElementById("Hotnews").innerHTML = hwnewstr.substring(0,txti+1);     
        txti++;  
        txttimer = setInterval("shownew()",250);      
    }
    shownew();

