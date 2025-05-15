extends Node

var level_folder_path = "res://Assets/Scenes/Levels/"
var current_level = 1

func next_level():
	current_level += 1
	var level_file_path = level_folder_path + "level_" + str(current_level) + ".tscn"
	get_tree().change_scene_to_file(level_file_path)
	
	print("Player has been teleported to level " + str(current_level))
