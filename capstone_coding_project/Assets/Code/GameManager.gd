extends Node


var level_folder_path = "res://Assets/Scenes/Levels/"
var current_level = 1
var starting_level = 1
var items_collected = 0
var current_hearts = 3
var player : PlayerController
var level_container: Node2D
var hud: HUD
var menu: Control

	
	
func load_level(level_number):
	#check the file path for a new scene(level)
	var level_file_path = level_folder_path + "level_" + str(level_number) + ".tscn"
	var scene = load(level_file_path) as PackedScene      #loads up the file of the scene
	if !scene:                    
		return
	for child in level_container.get_children():   #deletes the children of a node
		child.queue_free()
		await child.tree_exited
	var instant = scene.instantiate()       #opens up a scene with its heirarchy
	level_container.add_child(instant)
	reset_items_collected()
	#Setting the new starting position of player in new level
	var start_pos = get_tree().get_first_node_in_group("PlayerPosition") as Node2D
	player.teleport(start_pos.position)
	hud.portal_closed()

func setup_level():  #sets up the level for starting the game after play button pressed on menu
	level_container = get_tree().get_first_node_in_group("Level_container")
	player = get_tree().get_first_node_in_group("Player")
	hud = get_tree().get_first_node_in_group("HUD")
	menu = get_tree().get_first_node_in_group("Main menu") 
	load_level(starting_level)

func next_level():
	current_level += 1
	load_level(current_level)
	print("Player has been teleported to level " + str(current_level))

func reset_items_collected():
	items_collected = 0
	hud.collectible_label.text = "x " + "0"
	
func add_collectible():        #adds up the score of items colleccted
	items_collected += 1
	hud.update_collectibles(items_collected)
	if items_collected == 4:    #when 4 items collected then the portal is opened
		var portal = get_tree().get_first_node_in_group("Level_Exit")
		portal.open_portal()
		hud.portal_opened()
		
		
