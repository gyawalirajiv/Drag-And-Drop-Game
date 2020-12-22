#pragma strict
var background: Texture2D;
var begin : Texture2D;
var theHeight : int = 100;
var theWidth : int = 400;
var guiStyle : GUIStyle;
var textcolor: GUIStyle;
var font:Font;
//var fontstyle:FontStyle;
//var font:Font;
//var size: int=20;
var level : int = 0;

function Start () {

}
function Update()
{
}
//GUI.Label (Rect (100, 50, 100, 20), "Hello World!");
function OnGUI() {
	if(level == 0){
	       if(GUI.Button(Rect(Screen.width-300, Screen.height-130, theWidth, theHeight), background, guiStyle))
	       {
	       		Destroy(GameObject.Find("Background"));
	       		Destroy(GameObject.Find("Logo"));
	       		//Destroy(GameObject.Find("GameManager"));
	       		level ++;
	       }
	     }
	if(level == 1){
	GUI.skin.font=font;
		GUI.Label(Rect(100, 300, 100, 100), "INSTRUCTIONS", guiStyle);
		GUI.Label(Rect(100, 350, 100, 100), "Drag and drop the tools to their correct placeholders at the top.", textcolor);
		GUI.Label(Rect(100, 390, 100, 100), "Each correct drag and drop sequence will add 2 points to your total score.", textcolor);
		GUI.Label(Rect(100, 430, 100, 100), "Each incorrect drag and drop sequence will substract 1 points from your total score.", textcolor);
		GUI.Label(Rect(100, 470, 100, 100), "You will have a total of 5 minutes to completes the assesment.", textcolor);
		GUI.Label(Rect(100, 510, 100, 100), "Based on your score and time, you will receive 1-5 stars at the end.", textcolor);
		
		if(GUI.Button(Rect(Screen.width-300, Screen.height-130, theWidth, theHeight), begin, guiStyle))
	       {
	       	//GUI.Label(Rect(100, 300, 100, 100), "Knife");
	       	Application.LoadLevel("MainScene");
	       }
		}
	           /*if(GUI.Button(Rect(Screen.width-400, Screen.height-200, theWidth, theHeight), background, guiStyle))
	       {
	       		Application.LoadLevel("MainScene");
	       }
	     }*/
	     //GUI.Label(Rect(Screen.width-400, Screen.height-50, 200, 30), "Draw");
    }
   
	