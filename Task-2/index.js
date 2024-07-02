

async function getData(){
    return new Promise((req,res)=>{
        setTimeout(()=>{
            console.log("i am waiting bruhh");
        },3500);
    })
}

async function main(){

    console.log("i am first");
    console.log("i am second");
    let data = await getData();
    console.log("in am fourth");
}