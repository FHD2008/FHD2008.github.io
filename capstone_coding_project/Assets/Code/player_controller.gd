extends CharacterBody2D
class_name PlayerController
#manages all physics, behaviour and input of the character, player

@export var speed = 10
@export var jump_power = 10
@export var camera: Camera2D
@export var wall_jump_power = 15
@export var camera_top_limit = 0
@export var camera_bottom_limit = 768
@export var sprite: AnimatedSprite2D

var dead = false
var hud: HUD
var hit = false
var direction = 0
const  speed_Multiplier = 20.0  #multiplied by the speed to give visually good looking motion
const jump_Multiplier = -35.0   #multiplied by jump power 
var wall_gravity = 110  #gravity on player while sliding on wall
var pushback = 0   #pushback value when jumping off wall or getting knocked by enemy


func _ready(): #gets the HUD node, sets top and bottom camera scrolling limit
	hud = get_tree().get_first_node_in_group("HUD")
	camera.set_limit(SIDE_TOP, camera_top_limit)  
	camera.set_limit(SIDE_BOTTOM, camera_bottom_limit)

func _process(_delta):    #sets different limit on left side for camera in each level
	if GameManager.current_level == 1:
		camera.set_limit(SIDE_LEFT, -1152)
	elif GameManager.current_level == 2:
		camera.set_limit(SIDE_LEFT, -528)

func _input(event):  #handles input for jumping, wall jumping and sliding
	# Jumping up functionality
	if event.is_action_pressed("jump"):
		if is_on_floor():
			velocity.y = jump_power * jump_Multiplier
	# Wall jump functionailty
		if is_on_wall_only() and Input.is_action_pressed("move_right"):
			velocity.y = wall_jump_power * jump_Multiplier
			pushback = -2.5
		if is_on_wall_only() and Input.is_action_pressed("move_left"):
			velocity.y = wall_jump_power * jump_Multiplier
			pushback = 2.5
	# Jumping down through platforms
	if event.is_action_pressed("jump_downwards") and is_on_floor():
		set_collision_mask_value(10, false)

	else:
		set_collision_mask_value(10, true)
		

func _physics_process(delta):
	GameManager.respawn_player()   #keeps checking for if player goes into void so to respawn it
		# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta    #adds gravity
	#Adjust gravity for wall slide
	if is_on_wall() and not is_on_floor():   #sets gravity to wall gravity
		if velocity.y > wall_gravity:
			velocity.y = wall_gravity
		
	direction = Input.get_axis("move_left", "move_right")
	if direction:
		velocity.x = (direction + pushback) * speed * speed_Multiplier
	elif hit:
		velocity.x = (direction + pushback) * speed * speed_Multiplier
	else:
		velocity.x = move_toward(velocity.x, 0, speed * speed_Multiplier)
	pushback *= 0.9
	move_and_slide()
	
	
func teleport(new_location):
	camera.position_smoothing_enabled = false
	position = new_location

func damaged(dir):
	hit = true
	pushback = dir*4 
	velocity.y = -200
	hud.decrease_lives()
	print("damage")

func kill_jump():
	velocity.y = -300
