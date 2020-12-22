

function Update()
{

}

function OnTriggerEnter(col: Collider)
{
	var pos=col.GetComponent("initPos");
	var initPos: Vector3;
	
	initPos=pos.GetPos();
	col.rigidbody.isKinematic=true;
	col.transform.position.x=initPos.x;
	col.transform.position.y=initPos.y;
	col.transform.position.z=initPos.z;
}