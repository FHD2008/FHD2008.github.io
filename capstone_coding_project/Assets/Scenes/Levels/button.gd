extends Button

func _ready():
	pressed.connect(restart_game)
	
func restart_game():
	GameManager.current_level = 1
	get_tree().change_scene_to_file("res://Assets/Scenes/UI Scenes/Starting_screen.tscn")
