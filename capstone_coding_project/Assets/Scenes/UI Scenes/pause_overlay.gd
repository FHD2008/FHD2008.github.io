extends CanvasLayer
@export var pause_button: Button
@export var resume_button: Button

func _ready():
	visible = false
	pause_button.visible = true
	pause_button.pressed.connect(pause_game)
	resume_button.pressed.connect(resume_game)
	
	
func pause_game():
	visible = true
	pause_button.visible = false
	get_tree().paused = true

func resume_game():
	visible = false
	get_tree().paused = false
	pause_button.visible = true
