import Express from "express";
const people_routes = import ("./Routers/People.routers.js");
//import fs from "fs";

const app = Express();

app.listen(3000, () => {
    console.log('server is listening on port 3000')
});

app.use(Express.json());
//app.use('/api/people', people_routes);
