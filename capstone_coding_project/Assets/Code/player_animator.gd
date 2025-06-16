extends Node2D
#Manages the player animations

@export var player_Controller: PlayerController
@export var sprite: AnimatedSprite2D
var skin_path = "res://Assets/Sprites/Pixel Adventure 1/Free/Main Characters/Player_spriteFrameResources/ninjafrog_skin.tres"



func _process(_delta):
	if player_Controller.direction == 1:      #if the player is pointing positive direction (right) it doesn't flip the sprite horizontally
		sprite.flip_h = false
	elif player_Controller.direction == -1:
		sprite.flip_h = true
		
	if player_Controller.dead:     #if dead variable is true, play death animation then reset
		sprite.play("die_animation")
		await sprite.animation_finished
		player_Controller.dead = false
	
	if player_Controller.hit == true:  #play hit animation when player gets hit by the rock then reset
		sprite.play("hit_animation")
		await sprite.animation_finished
		player_Controller.hit = false
		
	if abs(player_Controller.velocity.x) > 0.0:   #whenever player is moving(higher velocity than zero), play the moving animation else stay idle
		sprite.play("moving_animation")
	else:
		sprite.play("idle animation") 
	
	if player_Controller.is_on_floor() == false && player_Controller.velocity.y < 0.0:  #plays jump animation while player in air and has jumped
		sprite.play("jump_animation")
	elif player_Controller.is_on_floor() == false && player_Controller.is_on_wall() == true:  #plays wall slide animation when player isnt on floor and is on wall
		sprite.play("wall_slide_jump")
	elif player_Controller.is_on_floor() == false && player_Controller.velocity.y > 0.0: #while player is falling down which is when its y velocity is positive, play fall animation
		sprite.play("fall_animation")
	

	
