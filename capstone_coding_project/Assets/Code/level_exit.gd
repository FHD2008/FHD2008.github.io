extends Area2D

class_name Portal
@export var sprite: AnimatedSprite2D


var is_open = false

func _ready():
	close_portal()
	
func open_portal():
	is_open = true
	sprite.play("opening_portal")
	await sprite.animation_finished
	sprite.play("default")

func close_portal():
	is_open = false
	sprite.play("closed")

func _on_body_entered(body):
	if   is_open and body is PlayerController:
		print("body enetred")
		GameManager.next_level()
