extends Area2D

@export var apple: AnimatedSprite2D

func _ready():
	apple.show()
	apple.set_physics_process(true)


func _on_body_entered(body):
	if body is PlayerController:
		apple.play("collected")
		await apple.animation_finished
		queue_free()
		GameManager.add_collectible()
