extends CharacterBody2D
class_name PlayerController

@export var speed = 10
@export var jump_power = 10
@export var camera = Camera2D
var ray_collider = RayCast2D

var direction = 0
var speed_Multiplier = 20.0
var jump_Multiplier = -35.0
var wall_gravity = 150

func _input(event):
	# Jumping up functionality
	if event.is_action_pressed("jump") and is_on_floor():
		velocity.y = jump_power * jump_Multiplier
	# Jumping down through platforms
	
	if event.is_action_pressed("jump_downwards") and is_on_floor():
		set_collision_mask_value(10, false)
	
		
	
	
	else:
		set_collision_mask_value(10, true)
		

func _physics_process(delta):
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta
	if is_on_wall() and not is_on_floor():
		print("wallslide")
		if velocity.y > wall_gravity:
			velocity.y = wall_gravity
		
			
		
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	direction = Input.get_axis("move_left", "move_right")
	if direction:
		velocity.x = direction * speed * speed_Multiplier
	elif Input.is_action_pressed("jump") and not is_on_floor() and is_on_wall():
		velocity.x = -500
		velocity.y = -400
	else:
		velocity.x = move_toward(velocity.x, 0, speed * speed_Multiplier)

	move_and_slide()
	
	
func teleport(new_location):
	camera.position_smoothing_enabled = false
	position = new_location
	await get_tree().physics_frame
	camera.position_smoothing_enabled = true
	
	
