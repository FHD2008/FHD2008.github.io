extends CharacterBody2D

@export var sprite: AnimatedSprite2D
@export var distance = 100
@export var patrolling_speed = 50
var player: PlayerController
var start_pos = 0

var direction = -1
var stopped = false


func _ready():
	collision_mask = 2
	player = get_tree().get_first_node_in_group("Player")
	start_pos = position.x
	
func _physics_process(delta):
	if stopped == false:
		velocity.x += direction * patrolling_speed * delta
	
		var dist_traveled = position.x - start_pos
		if direction == -1 and dist_traveled <= -distance:
			await turn_around(true)
		
		if direction == 1 and dist_traveled >= distance:
			await turn_around(false)
	
	move_and_slide()
	
		

func turn_around(flip_h):
	stopped = true
	velocity.x = 0
	move_and_slide()
	sprite.play("idle")
	await get_tree().create_timer(2).timeout
	sprite.flip_h = flip_h
	direction *= -1
	sprite.play("run")
	stopped = false
	
	
	

	


func _on_area_2d_body_entered(body):
	if body is PlayerController:
		var y_delta = position.y - player.position.y
		var x_delta = position.x - player.position.x
		if y_delta >= 0:
			print("kill enemey")
			collision_mask = 1
			player.kill_jump()
			set_process(false)
			sprite.play("die")
			await sprite.animation_finished
			queue_free()
		if y_delta <= 0:
			print("player damage")
			if x_delta >= 0:
				player.pushback = -4
				player.damaged() 
			elif x_delta <= 0:
				player.pushback = 4
				player.damaged() 
			
		
