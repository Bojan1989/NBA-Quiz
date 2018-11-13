const express= require('express'),
	 path = require('path');

const app =express();


app.use(express.static('./dist/KvizNBA'));

app.get('/*', (req,res)=>{

res.sendFile(path.join(__dirname,'/dist/KvizNBA/index.html'));

});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})
