var correct : int = 0 ;
var wrong : int = 0;
var guiSkin : GUISkin;
var mystyle : GUIStyle;
private var startTime : float;
var textTime : String;
function Update ()
{
if(correct==1)
{
	Debug.Log("Hello");
}
}
function Correct(){
	correct++;
}
function Wrong(){
	wrong++;
}

function OnGUI(){
GUI.Label(Rect(50,120,100,100), "SCORE", mystyle);
GUI.Label(Rect(80,150,100,100), null +correct.ToString(), mystyle);

GUI.Label(Rect(40,190,100,100), "CORRECT", mystyle);
//GUI.Label(Rect(20,150,100,100), "", + correct.ToString());
	GUI.Label(Rect(80,220,100,100), null + correct.ToString(), mystyle);
	GUI.Label(Rect(40,250,100,100), "INCORRECT", mystyle);
	GUI.Label(Rect(80,280,100,100),  null + wrong.ToString(), mystyle);
	//if(correct == 16){
		//GUI.
		/*GUI.Label(Rect(300,115,200,20), "You have made " + wrong.ToString() + " wrong", mystyle);
		if(GUI.Button(Rect(600, 270, 100, 50), "Restart Game")){
			Application.LoadLevel("MainScene");*/
			
			var guiTime = Time.time - startTime; 
//The gui-Time is the difference between the actual time and the start time.
var minutes : int = guiTime / 60; //Divide the guiTime by sixty to get the minutes.
var seconds : int = guiTime % 60;//Use the euclidean division for the seconds.
//var fraction : int = (guiTime * 100) % 100;
 
 textTime = String.Format ("{0:00}:{1:00}", minutes, seconds); 
//text.Time is the time that will be displayed.
GUI.Label(Rect(60, 320, 100, 100), "TIME", mystyle);
GUI.Label(Rect(60, 340, 100, 100), textTime, mystyle);
		}
//}
