extends Area2D

@export var apple: AnimatedSprite2D

func _ready():
	apple.show()                    #unhides the apple to be visible
	apple.set_physics_process(true) #enables the physics and collision detection of the apple


func _on_body_entered(body):
	if body is PlayerController:   #check if the body entered into the collision shape is player
		apple.play("collected")
		await apple.animation_finished
		queue_free()   #deletes the apple
		GameManager.add_collectible()    #adds to the variable of collectibles in GameManager
