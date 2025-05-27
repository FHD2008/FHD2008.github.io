extends Area2D
class_name Fire_Trap

@export var fire_animation: AnimatedSprite2D
var player = PlayerController
var fire_on = false
var damage = false

func _on_body_entered(body):
	if fire_on and body is PlayerController:
		damage = true
	else:
		damage = false
