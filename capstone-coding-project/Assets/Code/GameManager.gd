extends Node

var level_folder_path = "res://Assets/Scenes/Levels/"
var current_level = 1
var starting_level = 1
var items_collected = 0
var player : PlayerController
var level_container: Node2D
var hud: HUD




func _ready():
	level_container = get_tree().get_first_node_in_group("Level_container")
	player = get_tree().get_first_node_in_group("Player")
	hud = get_tree().get_first_node_in_group("HUD")
	load_level(starting_level)
	reset_items_collected()

func _process(_delta):
	reset_player_pos()

func next_level():
	current_level += 1
	load_level(current_level)
	print("Player has been teleported to level " + str(current_level))
	
func load_level(level_number):
	#check the file path for a new scene(level)
	var level_file_path = level_folder_path + "level_" + str(level_number) + ".tscn"
	var scene = load(level_file_path) as PackedScene
	if !scene:
		return
	for child in level_container.get_children():
		child.queue_free()
		await child.tree_exited
	var instant = scene.instantiate()
	level_container.add_child(instant)
	reset_items_collected()
	#Setting the new starting position of player in new level
	var start_pos = get_tree().get_first_node_in_group("PlayerPosition") as Node2D
	player.teleport(start_pos.position)
	hud.portal_closed()
		

func reset_items_collected():
	items_collected = 0
	
func add_collectible():
	items_collected += 1
	hud.update_collectibles(items_collected)
	if items_collected == 4:
		var portal = get_tree().get_first_node_in_group("Level_Exit")
		portal.open_portal()
		hud.portal_opened()
		
func reset_player_pos(): #resets player position if falls off the ground
	var start_pos = get_tree().get_first_node_in_group("PlayerPosition") as Node2D
	if player.position.y >= 250:
		player.velocity.y = 0
		player.teleport(start_pos.position)
		
