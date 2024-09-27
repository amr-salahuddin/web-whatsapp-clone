const app =require("./app");
const mongoose =require( "mongoose");

let uri = process.env.MONGODB_URI;
uri = uri.replace("<db_password>", process.env.MONGODB_PASSWORD);

mongoose.connect(uri, {
}).then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 2000, () => {
        console.log("Listening on port 5000");
    });
}).catch((err) => {
    console.log(err);
});

