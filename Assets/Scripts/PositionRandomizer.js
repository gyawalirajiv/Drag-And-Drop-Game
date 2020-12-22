var pos = new Array();

//Top Transform Positions
pos.Push(Vector2(-12.2, 0.69));
pos.Push(Vector2(-5.12, 2.83));
//pos.Push(Vector2(-12.3, 5.13));
pos.Push(Vector2(-5.07, -1.63));
pos.Push(Vector2(-9.84, 0.61));
pos.Push(Vector2(-5.081, 5.121));
pos.Push(Vector2(-7.4, -1.66));
pos.Push(Vector2(-9.86, 5.08));
//pos.Push(Vector2(-9.9, -1.7));
pos.Push(Vector2(-12.2, -1.65));
pos.Push(Vector2(-12.18, 2.91));
pos.Push(Vector2(-7.39, 2.84));
pos.Push(Vector2(-7.51, 5.17));
pos.Push(Vector2(-9.86, 2.86));
pos.Push(Vector2(-5.19, 0.68));
pos.Push(Vector2(-7.52, 0.59));
//
var items = new Array();
items.Push(GameObject.Find("canvas"));
items.Push(GameObject.Find("cuttingTool"));
//items.Push(GameObject.Find("Brush"));
items.Push(GameObject.Find("ductInsulation"));
items.Push(GameObject.Find("fiber"));
items.Push(GameObject.Find("knife"));
items.Push(GameObject.Find("phenolic"));
items.Push(GameObject.Find("measuringTape"));
//items.Push(GameObject.Find("Acoustic"));
items.Push(GameObject.Find("phenolicTape"));
items.Push(GameObject.Find("pipe"));
items.Push(GameObject.Find("roller"));
items.Push(GameObject.Find("snip"));
items.Push(GameObject.Find("stuck"));
items.Push(GameObject.Find("foster"));
items.Push(GameObject.Find("ductTape"));


var randomArrayNumber : int;

var lengthOfArray : int = pos.length;


function Start(){
	var lengthOfArray : int = pos.length;
	var processingLength : int = lengthOfArray;
	
	for(i = 0; i < lengthOfArray; i++){
		var randomArrayNumber = Random.Range(0, processingLength);
		//print(lengthOfArray);
		items[i].transform.position = Vector3(pos[randomArrayNumber].x, pos[randomArrayNumber].y, -3);
		//print(pos[randomArrayNumber].x);
		//print(randomArrayNumber);
		pos.RemoveAt(randomArrayNumber);
		processingLength--;
	}
}



















/*#pragma strict
var pos=new Array();


pos.Push(Vector2(5.25, -0.45));
pos.Push(Vector2(0.19, -0.45));



var items = new Array();
items.Push(GameObject.Find("Brush"));
items.Push(GameObject.Find("Acoustic"));

var randomArrayNumber : int;

var lengthOfArray : int = pos.length;

function Start(){
	var lengthOfArray : int = pos.length;
	var processingLength : int = lengthOfArray;
	
	for(var i : int = 0; i < lengthOfArray; i++){
		var randomArrayNumber = Random.Range(0, processingLength - 1);
		//print(lengthOfArray);
		items[i].transform.position = Vector3(pos[randomArrayNumber].x, 1, pos[randomArrayNumber].y);
		//print(pos[randomArrayNumber].x);
		pos.RemoveAt(randomArrayNumber);
		processingLength--;
	}
}

function Update () {

}*/