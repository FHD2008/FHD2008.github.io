extends Area2D

class_name Portal
@export var sprite: AnimatedSprite2D


var is_open = false

func _ready():   #closes portal on start of the game
	close_portal()
	
func open_portal(): #opens the portal by playing the opening_portal animation and then idle animation of the portal
	is_open = true
	sprite.play("opening_portal")
	await sprite.animation_finished
	sprite.play("default")

func close_portal(): #closes the portal showing nothing
	is_open = false
	sprite.play("closed")

func _on_body_entered(body):  #detects if player has enetered when portal is open so it can go to next level
	if is_open and body is PlayerController:
		print("body entered")
		GameManager.next_level()
