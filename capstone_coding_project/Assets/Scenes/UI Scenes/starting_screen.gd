extends Control
@export var play_button: Button
@export var levels_button: Button
@onready var return_button = %"Return Button"

func _ready():
	play_button.pressed.connect(start_game)
	levels_button.pressed.connect(open_levels_page)
	return_button.pressed.connect(return_to_home)
	
func start_game():
	get_tree().change_scene_to_file("res://Assets/Scenes/gameplay.tscn")
	
func open_levels_page():
	get_tree().change_scene_to_file("res://Assets/Scenes/UI Scenes/levels_page.tscn")
	

func return_to_home():
	get_tree().change_scene_to_file("res://Assets/Scenes/UI Scenes/Starting_screen.tscn")
