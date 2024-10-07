//Error handling in JavaScript is a way to catch and manage errors gracefully, preventing the application from crashing and providing informative feedback to users or developers

//try: Contains code that might throw an error.
//catch: Handles the error. You can access the error object for details.
//finally: Runs regardless of whether an error was caught or not, usually for cleanup tasks.

function divide(a,b){
    try{    
        if(b==0) throw new Error("Cannot Divided By zero");
        console.log(`Result : ${a}/${b}=${a/b}`);
    }
    catch(error){
        console.error("Error:",error.message);
    }
    finally{
        console.log("Division operation is complete")
    }
}
divide(10,2)
divide(10,0)


  