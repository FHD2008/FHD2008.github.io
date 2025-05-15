extends Path2D
class_name moving_platform

@export var path_follow_2d: PathFollow2D
@export var move_speed =  1.0
@export var ease: Tween.EaseType
@export var transition: Tween.TransitionType

func _ready():
	move_tween()
	
func move_tween():
	var tween = get_tree().create_tween().set_loops()
	tween.tween_property(path_follow_2d, "progress_ratio", 1.0, move_speed).set_ease(ease).set_trans(transition)
	tween.tween_property(path_follow_2d, "progress_ratio", 0.0, move_speed).set_ease(ease).set_trans(transition)
	
	
