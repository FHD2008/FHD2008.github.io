extends CanvasLayer
@export var pause_button: Button
@onready var resume_button = $Panel/VBoxContainer/ResumeButton
@onready var menu_button = $Panel/VBoxContainer/MenuButton

func _ready():
	visible = false
	pause_button.visible = true
	pause_button.pressed.connect(pause_game)
	resume_button.pressed.connect(resume_game)
	menu_button.pressed.connect(go_to_menu)
	
	
func pause_game():
	visible = true
	pause_button.visible = false
	get_tree().paused = true

func resume_game():
	visible = false
	get_tree().paused = false
	pause_button.visible = true
	
func go_to_menu():
	get_tree().change_scene_to_file("res://Assets/Scenes/UI Scenes/Starting_screen.tscn")
