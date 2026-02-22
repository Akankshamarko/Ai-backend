exports.summerizeText = aync((req,res)=>{
const text = req.body.text;
if(!text){
    return
    res.status(400).json({messege:"messege is requried"});
}
    const words = text.split(" ");
    const summary = words.slice(0,10).join(" ")+ " ....";

    res.json({summary});

})