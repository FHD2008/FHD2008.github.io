extends Node

var level_folder_path = "res://Assets/Scenes/Levels/"
var current_level = 1
var starting_level = 1
var items_collected = 0
var player : PlayerController
var level_container: Node2D

func _ready():
	level_container = get_tree().get_first_node_in_group("Level_container")
	player = get_tree().get_first_node_in_group("Player")
	load_level(starting_level)
	reset_items_collected()

func next_level():
	current_level += 1
	load_level(current_level)
	print("Player has been teleported to level " + str(current_level))
	
func load_level(level_number):
	#check the file path for a new scene(level)
	var level_file_path = level_folder_path + "level_" + str(current_level) + ".tscn"
	var scene = load(level_file_path) as PackedScene
	if !scene:
		return
	for child in level_container.get_children():
		child.queue_free()
		await child.tree_exited
	var instant = scene.instantiate()
	level_container.add_child(instant)
	reset_items_collected()
	var new_location = get_tree().get_first_node_in_group("PlayerPosition") as Node2D
	player.teleport(new_location.position)
		

func reset_items_collected():
	items_collected = 0
	
func add_collectible():
	items_collected += 1
	if items_collected == 4:
		var portal = get_tree().get_first_node_in_group("Level_Exit")
		portal.open_portal()
