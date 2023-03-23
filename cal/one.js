function clear_value()
{
    document.getElementById("result").value="";
}
function display_value(input)
{
    document.getElementById("result").value+=input;
}
function del(){
    document.getElementById("result").value=result.value.slice(0,-1);

}

function square(){
    
    document.getElementById("result").value=result.value**2;

}
function cube(){
    document.getElementById("result").value=result.value**3;
}
function factor(){
        num=result.value;
        fact=1;
        for(i=num;i>0;i--)
        {
            fact=fact*i
        }
        document.getElementById("result").value=fact;
    }

function one_divide(){

    document.getElementById("result").value=1/result.value;
}
function ten_squ(){
    document.getElementById("result").value=10**result.value;
}

function calculate(){
   var output=eval(document.getElementById("result").value)
   document.getElementById("result").value=output;
}
function even(){
    num=result.value;
    if(num%2==0){
        document.getElementById("result").value=num+" "+"is a even number";
    }
    else{
        document.getElementById("result").value=num+" "+"is a not even number";
    }
}
function odd(){
    num=result.value;
    if(num%2==0){
        document.getElementById("result").value=num+" "+"is a not odd number";
    }
    else{
        document.getElementById("result").value=num+" "+"is a odd number";
    }
}
function prime_value(){
num=result.value
prime=[]
for(i=1;i<=num;i++){
    if (num%i==0){
        prime.push(i)
    }
  }
if(prime.length==2)
{
    document.getElementById("result").value=num+" "+"is a prime number";
}
else
{
    document.getElementById("result").value=num+" "+"is a not prime number";
}
}

function multiple(){
    num=result.value
    fact=[]
    for(i=1;i<=num;i++){
        if (num%i==0){
           fact.push(i) 
        }
      }
      document.getElementById("result").value=fact;
    }
function divisible(){
        num=result.value
        fact=[]
        for(i=1;i<=num;i++){
            if (num%i==0){
               fact.push(i) 
            }
          }
          document.getElementById("result").value=fact;
        }
function exp(){
    num=(result.value+"**");
    document.getElementById("result").value=num
}


function even_value(){

    num=result.value
    fact=[]
    for(i=1;i<=num;i++){
        if (i%2==0){
           fact.push(i) 
        }
        document.getElementById("result").value=fact;
      }
      
}

function odd_value(){
    num=result.value
    fact=[]
    for(i=1;i<=num;i++){
        if (i%2==1){
           fact.push(i) 
        }
        document.getElementById("result").value=fact;
      }
    }


    function primemulti(){
        store=[]
        num=result.value
        for(i=2;i<=num;i++){
            fact=[]
            for(j=1;j<=i;j++){
                if(i%j==0)
                {
                    fact.push(j)
                }  
            }
            if(fact.length==2){
                 store.push(i)      
            } 
        }
        document.getElementById("result").value=store;
        } 

     document.getElementById("123").textContent= new date();   

       
           

