console.log("this is module")

function avg(arr){
    sum=0
    arr.forEach(element => {
        sum+=element
    });
    return sum/arr.length;
}

module.exports ={
    average: avg,
    name:"harry",
    repo: "github"
 } //for the module to be able to give fn to others we have to export explicitly

