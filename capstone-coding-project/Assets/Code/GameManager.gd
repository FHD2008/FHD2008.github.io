extends Node

var level_folder_path = "res://Assets/Scenes/Levels/"
var current_level = 1
var items_collected = 0

func _ready():
	reset_items_collected()

func next_level():
	current_level += 1
	var level_file_path = level_folder_path + "level_" + str(current_level) + ".tscn"
	get_tree().change_scene_to_file(level_file_path)
	reset_items_collected()
	print("Player has been teleported to level " + str(current_level))
	
func reset_items_collected():
	items_collected = 0
	
func add_collectible():
	items_collected += 1
	if items_collected == 4:
		var portal = get_tree().get_first_node_in_group("Level_Exit")
		portal.open_portal()
