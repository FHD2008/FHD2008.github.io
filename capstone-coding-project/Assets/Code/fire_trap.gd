extends Node2D
class_name Fire_Trap

@export var fire_animation: AnimatedSprite2D
var player: PlayerController
var fire_on = false

func _ready():
	fire_on = true

func _on_body_entered(body):
	if fire_on == true and body is PlayerController:
		player.damaged()
	
