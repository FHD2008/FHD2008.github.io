extends Node2D
class_name Fire_Trap

@export var fire_animation: AnimatedSprite2D
@export var fire_area: Area2D
var player: PlayerController
var fire_on = false   #variable for the state of the fire trap (on or off)

func _ready():
	player = get_tree().get_first_node_in_group("Player")   #accesses the Player node
	fire_on = true

	

func _on_area_2d_body_entered(body):
	if body is PlayerController and fire_on == true:   #checks if player has entered into the fire
		player.damaged()   #calls damaged() function in the player 
	
