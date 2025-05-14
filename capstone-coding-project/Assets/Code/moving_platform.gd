extends Path2D
class_name moving_platform

@export var path_follow_2d: PathFollow2D

func _ready():
	move_tween()
	
func move_tween():
	var tween = get_tree().create_tween().set_loops()
	tween.tween_property(path_follow_2d, "progress_ratio", 1.0, 1.5)
	tween.tween_property(path_follow_2d, "progress_ratio", 0.0, 1.5)
	
	
