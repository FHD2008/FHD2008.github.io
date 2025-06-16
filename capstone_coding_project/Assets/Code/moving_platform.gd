extends Path2D
class_name moving_platform

@export var path_follow_2d: PathFollow2D
@export var move_speed =  1.0
@export var easing: Tween.EaseType
@export var transition: Tween.TransitionType
var tween = Tween

func _ready():
	await get_tree().process_frame
	
	move_tween()


func move_tween():
	tween = get_tree().create_tween().set_loops()
	tween.tween_property(path_follow_2d, "progress_ratio", 1.0, move_speed).set_ease(easing).set_trans(transition)
	tween.tween_property(path_follow_2d, "progress_ratio", 0.0, move_speed).set_ease(easing).set_trans(transition)

func _exit_tree():
	if tween:
		tween.kill()
