extends CharacterBody2D

@export var sprite: AnimatedSprite2D   #variable for handling animations of the rock
@export var max_distance = 100
@export var patrolling_speed = 50
var player: PlayerController
var start_pos = 0

var direction = -1   # -1 means pointing left while 1 is pointing right
var stopped = false


func _ready():
	collision_mask = 2     # the rock does not mask for the player therefore player doesn't get affected by the rock's direct collision
	player = get_tree().get_first_node_in_group("Player")   #gets the player node to access it
	start_pos = position.x
	
func _physics_process(delta):
	if stopped == false:      # if the rock is not stopped it will patrol towards the direction is set
		velocity.x += direction * patrolling_speed * delta
	
		var dist_traveled = position.x - start_pos    # this tells the distance travelled from the start position 
		if direction == -1 and dist_traveled <= -max_distance: #if the rock goes beyond the maximum distance in left direction 
			await turn_around(true)
		
		if direction == 1 and dist_traveled >= max_distance:  #if the rock goes beyond the maximum distance in left direction 
			await turn_around(false)
	
	move_and_slide()
	
		

func turn_around(flip_h):   #the function's parameter is a boolean for to flip the sprite and the function manages how long rock will stop and then turn around
	stopped = true
	velocity.x = 0
	move_and_slide()
	sprite.play("idle")
	await get_tree().create_timer(2).timeout    #2 second timer
	sprite.flip_h = flip_h
	direction *= -1
	sprite.play("run")
	stopped = false
	

func _on_area_2d_body_entered(body):
	if body is PlayerController:
		var y_delta = position.y - player.position.y   # this variable tells if the player is approaching from top of the rock or side
		var x_delta = position.x - player.position.x   # variable to check if player is coming from right side or left side
		if y_delta >= 0:    #if player is coming from top the enemy will be deleted
			print("kill enemy")
			collision_mask = 1  # the rock now masks the player so it looks like player has stomped on it
			player.kill_jump() # player jump after destroying the enemy
			set_process(false)  # eliminates all physics and processes of the enemy
			sprite.play("die")
			await sprite.animation_finished
			queue_free() #deletes enemy
		if y_delta <= 0:   # if player is approaching from sides...
			print("player damage")
			if x_delta >= 0:  #from left side
				player.damaged(-1)  #pushes back player to left
			elif x_delta <= 0:  #from right side
				player.damaged(1)  #pushes back player to right
			
		
