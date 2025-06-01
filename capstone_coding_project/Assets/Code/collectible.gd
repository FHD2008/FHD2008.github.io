extends Area2D

var items_collected = 0
@export var apple: AnimatedSprite2D

func _on_body_entered(body):
	if body is PlayerController:
		apple.play("collected")
		await apple.animation_finished
		queue_free()
		GameManager.add_collectible()
