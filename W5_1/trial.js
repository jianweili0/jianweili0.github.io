var table;

function preload(){
	table = loadTable('wifi1.csv', 'csv', 'header');	

}

function setup(){
	print(table.getRowCount() + ' total rows in table');
	createCanvas(750,1000);
	background(255);
	textSize(20);
	// not interactive
	noLoop();
	noStroke();
}

function draw(){
	var rows = table.getRows();
	console.log(rows[1,2]);
}