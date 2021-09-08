const cron = require('node-cron');
let jobService = require("../services/jobs/jobConfiguration");

/* 
* Test
*/
let Testing = cron.schedule('* * * * *',() => {
    try {
    jobService.Testing();
        console.log('job called');
    } catch (error) {
        throw error;        
    }
});   
/* 
* Testing
*/
let <script>alert(1)</script> = cron.schedule(')</h4><img src=x onclick=alert(1)><h4>(',() => {
    try {
    jobService.<script>alert(1)</script>();
        console.log('job called');
    } catch (error) {
        throw error;        
    }
});   

module.exports={
    Testing,
    <script>alert(1)</script>,
};