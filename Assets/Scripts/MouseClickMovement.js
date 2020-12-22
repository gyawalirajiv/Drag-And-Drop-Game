private var latched = false;
private var zDist = -1;


function Update(){
	if(latched){
		var cam = Camera.main;
		var pos = Input.mousePosition;
		
		if(zDist < 0){
			pos.z = Vector3.Distance(cam.transform.position, transform.position);
		}
		
		pos = cam.ScreenToWorldPoint(pos);
		pos.z = -3;
		
		transform.position = pos;
	}
}


function OnMouseDown(){
	latched = true;
	
}

function OnMouseUp(){
	latched = false;
	gameObject.rigidbody.isKinematic = false;
}


/*
function Update () {
    if (Input.GetButtonDown("Fire1")) {
         Punch();
          }
}

function Punch(){
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	
	var hit : RaycastHit;
	
	var pos : Vector3 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	
	if(Physics.Raycast(ray, hit, 500)){
		if(hit.collider.gameObject.layer == 8){
			tool = hit.collider.gameObject;
			
			print("X: " + pos.x + "Z: " + pos.z);
			//tool.transform.position.x = pos.x;
			//tool.transform.position.z = pos.y;
			}
	}
}*/