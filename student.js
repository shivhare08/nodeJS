const students = {
    name:"Shashank",
    city:"Gwalior",
    phone:6269084857,
    age:21,
    address:"Scindia Nagar",
    Addition: user = (c,d)=>{
        console.log("it is a + function",c+d)
    },
    substraction : function(a,b){
        console.log("it is a - function",a-b)
    }
}
module.exports = students()


// or---------------------------

module.exports ={
    name:"Shashank",
    city:"Gwalior",
    phone:6269084857,
    age:21,
    address:"Scindia Nagar",
    Addition: user = (c,d)=>{
        console.log("it is a + function",c+d)
    },
    substraction : function(a,b){
        console.log("it is a - function",a-b)
    }
}