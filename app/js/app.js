var ipc = require('ipc');

var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function () {
    ipc.send('close-main-window');
});



var exec = require('child_process').exec;
/*function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};*/
function parseProcesses(procs) {


	var pArray = procs.split("\n");

	console.log(pArray.length);

	for(x=0; x<pArray.length; x++) {
		//if (pArray[x].indexOf("Application") > -1) {
			//var theProc = pArray[x].split("\t");
			console.log(pArray[x]);
			//console.log(theProc[0]);
		//}
	}
	
}


//OSX also has TOP and top -o cpu
//exec("ps -ax", function(error, stdout, stderr){ parseProcesses(stdout); });
//exec("ps aux", function(error, stdout, stderr){ parseProcesses(stdout); });
exec("ps -axc -o comm", function(error, stdout, stderr){ parseProcesses(stdout); }); //Might not need the -a which is ALL users...

//tasklist for Windows


console.log(`This platform is ${process.platform}`);
