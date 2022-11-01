//let test = document.getElementById("tr").getElementsByTagName("tbody")[0]

//let row = test.insertRow()

//let roll = document.getElementById("roll")

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]


function none(){
    document.getElementById("digits").onchange = function(){

        var child = row.lastElementChild 
            while(child){
                row.removeChild(child)
                child = row.lastElementChild
            }
        
        if(this.value == "xxdigit"){
                //  for (let i = 0; i < 6; i++) {
                
                // let newCell = row.insertCell(i)
               roll.addEventListener("click", function(){
                let numbers = []
                while(numbers.length < 6){
                    let num = Math.floor(Math.random() * 49) + 1
                    if (!numbers.includes(num)) numbers.push(num)
                }
                let sorting = numbers.sort((a, b) => a - b)
                document.getElementById("generate").innerHTML = sorting

               })
              
                    

                
               // }
                
           
          
            
         
          
        
            
        }else if(this.value == "xxxdigit"){
            
            var child = row.lastElementChild 
            while(child){
                row.removeChild(child)
                child = row.lastElementChild
            }
            // for (let i = 0; i < 7; i++) {
              // let newCell = row.insertCell(i)    
                
                roll.addEventListener("click", function(){
                    let numbers = []
                    while(numbers.length < 7){
                        let num = Math.floor(Math.random() * 49) + 1
                        if (!numbers.includes(num)) numbers.push(num)
                    }
                    let sorting = numbers.sort((a, b) => a - b)


                  //  newCell.innerHTML = sorting // if i do this then i get duplicates
                    document.getElementById("generate").innerHTML = sorting // but i dont get duplicates for this

                    
                   })
            
           // }
       
                
            
          
         
      
          
        }else if (this.value == "default"){
            location.reload()
        }
    }
}
none()


