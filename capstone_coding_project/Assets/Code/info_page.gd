extends CanvasLayer
@export var info_button: Button
@onready var return_button = $Panel/ReturnButton

func _ready():
	visible = false
	info_button.pressed.connect(show_info)
	return_button.pressed.connect(return_to_game)

	
func show_info():
	visible = true
	get_tree().paused = true
	info_button.visible = false
	

func return_to_game():
	visible = false
	info_button.visible = true
	get_tree().paused = false

	
