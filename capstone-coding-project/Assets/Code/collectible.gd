extends Area2D

var items_collected = 0


func _on_body_entered(body):
	if body is PlayerController:
		queue_free()
		items_collected += 1
