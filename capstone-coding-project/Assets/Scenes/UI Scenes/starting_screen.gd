extends Control
@export var play_button: Button

func _ready():
	play_button.pressed.connect(start_game)
	
func start_game():
	get_tree().change_scene_to_file("res://Assets/Scenes/gameplay.tscn")
	GameManager.load_level(1)
