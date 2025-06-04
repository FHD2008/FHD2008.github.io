extends Node2D
class_name Fire_Trap

@export var fire_animation: AnimatedSprite2D
@export var fire_area: Area2D
var player: PlayerController
var fire_on = false
var time = 0 

func _ready():
	time = 0 
	player = get_tree().get_first_node_in_group("Player")
	fire_on = true

func _process(delta):
	time += delta
	print(int(time))
	

func _on_area_2d_body_entered(body):
	if body is PlayerController and fire_on == true:
		player.damaged()
	
