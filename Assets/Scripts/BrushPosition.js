var filled: Material;

var scoreboard : Scoreboard;
scoreboard = FindObjectOfType(Scoreboard);

var correctParticle : GameObject;
var wrongParticle : GameObject;

var deployementHeight : float = 100; 
var hitInfo : RaycastHit;
var hoveredGo : GameObject;


function Update () {
	hitInfo = new RaycastHit();
	var ray = new Ray(transform.position, Vector3(0, 0, 1));
	
	
	
	
	if(Physics.Raycast(ray, hitInfo, 100)){
		transform.renderer.material.shader = Shader.Find("Self-Illumin/Bumped Diffuse");
	}
	else{
		transform.renderer.material.shader = Shader.Find("Diffuse");
	}
}

function onGUI()
{
	GUI.Button(Rect(300, 100, 100, 100), "Continue");
}
function OnTriggerEnter(col : Collider){
	if(col.name == "Brush"){
		Destroy(col.gameObject);
		scoreboard.Correct();
		renderer.material=filled;
		//Instantiate(correctParticle, transform.position, transform.rotation);
		renderer.material.color = Color.green;
		yield WaitForSeconds(1);
		renderer.material.color = Color.white;
		
		}
	else{
		scoreboard.Wrong();
		var pos=col.GetComponent("initPos");
		var initPos: Vector3;
		//Instantiate(wrongParticle, transform.position, transform.rotation);
		renderer.material.color = Color.red;
		yield WaitForSeconds(1);
		renderer.material.color = Color.white;
		
		
		initPos=pos.GetPos();
		col.rigidbody.isKinematic=true;
		col.transform.position.x=initPos.x;
		col.transform.position.y=initPos.y;
		col.transform.position.z=initPos.z;
	}
}