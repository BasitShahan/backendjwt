const mongoose=require('mongoose');
mongoose.connect(process.env.CONN).then(()=>{console.log("connetion pass")})
.catch(()=>{console.log("connection failed")})

