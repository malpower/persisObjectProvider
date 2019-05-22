const fs=require("fs");

function getPersistData()
{
    try
    {
        let content=fs.readFileSync("pers.json");
        return JSON.parse(content.toString("utf8"));
    }
    catch (e)
    {
        return {};
    }
}


const pers=getPersistData();

setInterval(()=>
{
    fs.writeFile("pers.json", JSON.stringify(pers), ()=>{});
}, 1000*5);

module.exports={persistence: pers};
