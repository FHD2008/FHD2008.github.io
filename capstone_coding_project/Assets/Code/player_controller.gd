extends CharacterBody2D
class_name PlayerController

@export var speed = 10
@export var jump_power = 10
@export var camera: Camera2D
@export var wall_jump_power = 15
@export var camera_vertical_limit = 0

var hud: HUD
var hit = false
var direction = 0
var speed_Multiplier = 20.0
var jump_Multiplier = -35.0
var wall_gravity = 110
var pushback = 0



func _ready():
	hud = get_tree().get_first_node_in_group("HUD")
	camera.set_limit(SIDE_TOP, camera_vertical_limit)

func _process(_delta):
	if GameManager.current_level == 1:
		camera.set_limit(SIDE_LEFT, -1152)

func _input(event):
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
	# Add the gravity.
	reset_player_pos()
	if not is_on_floor():
		velocity += get_gravity() * delta
	if is_on_wall() and not is_on_floor():
		if velocity.y > wall_gravity:
			velocity.y = wall_gravity
		
			
		
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	direction = Input.get_axis("move_left", "move_right")
	if direction:
		velocity.x = (direction + pushback) * speed * speed_Multiplier
	else:
		velocity.x = move_toward(velocity.x, 0, speed * speed_Multiplier)
	pushback *= 0.9
	move_and_slide()
	
	
func teleport(new_location):
	position = new_location

	
func damaged():
	hit = true
	pushback = -3
	velocity.y = -100
	hud.decrease_lives()
	print("damage")
	
func reset_player_pos():
	var start_pos = get_tree().get_first_node_in_group("PlayerPosition") as Node2D
	if position.y >= 768:
		velocity.y = 0
		teleport(start_pos.position)

func kill_jump():
	velocity.y = jump_power*jump_Multiplier
