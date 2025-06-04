extends StaticBody2D

@export var sprite: AnimatedSprite2D
var player: PlayerController

func _ready():
	player = get_tree().get_first_node_in_group("Player")
	
func _process(delta):
	pass
	


func _on_area_2d_body_entered(body):
	if body is PlayerController:
		var y_delta = position.y - player.position.y
		if y_delta >= 0:
			print("kill enemey")
			sprite.play("die")
			await sprite.animation_finished
			queue_free()
			player.kill_jump()
		if y_delta <= 0:
			print("player damage")
			player.damaged() 
		
