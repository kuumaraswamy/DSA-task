//Question 1
let foobar = (num) =>{
  for (let i=1;i<=5;i++){
  let Foo =i%3 == 0;
  let Bar = i%5 == 0;
  if(Foo){
    console.log("Foo")
  }
  else if(Bar){
    console.log("Bar")
  }
  else{
    console.log(i)
  }
}
}
foobar()
