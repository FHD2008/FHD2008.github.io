extends Node2D
@export var player_Controller: PlayerController
@export var sprite: AnimatedSprite2D
var skin_path = "res://Assets/Sprites/Pixel Adventure 1/Free/Main Characters/Player_spriteFrameResources/ninjafrog_skin.tres"



func _process(_delta):
	if player_Controller.direction == 1:
		sprite.flip_h = false
	elif player_Controller.direction == -1:
		sprite.flip_h = true
		
	if player_Controller.hit == true:
		sprite.play("hit_animation")
		await sprite.animation_finished
		player_Controller.hit = false
		
	if abs(player_Controller.velocity.x) > 0.0:
		sprite.play("moving_animation")
	else:
		sprite.play("idle animation") 
	
	if player_Controller.is_on_floor() == false && player_Controller.velocity.y < 0.0:
		sprite.play("jump_animation")
	elif player_Controller.is_on_floor() == false && player_Controller.is_on_wall() == true:
		sprite.play("wall_slide_jump")
	elif player_Controller.is_on_floor() == false && player_Controller.velocity.y > 0.0:
		sprite.play("fall_animation")
	
	
	
