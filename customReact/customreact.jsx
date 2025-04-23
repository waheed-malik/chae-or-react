<script>
    let num =[3,5,1,2,4]
    // for(let i=0; i<num.length; i++){
    //   console.log(num[i])
    // }

    // forEach loop
    num.forEach((element)=>{
      console.log(element*element)
    })

    // Array.from
    let name= "Waheed"
    let arr=Array.from(name)
    console.log(arr)

    //  foo .. of  *
    for(let item of num){
      console.log(item)
    }

    // for.. in
    for(let i in num){
      console.log(num[i])
    }
  </script>