extends Node


var level_folder_path = "res://Assets/Scenes/Levels/"
var current_level = 1
var starting_level = 1
var items_collected = 0
var player : PlayerController
var level_container: Node2D
var hud: HUD
var collectible_scene = preload("res://Assets/Scenes/collectible.tscn")
var collectibles_positions = []
var collectible_node = null

	
	
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
	#Spawning at the start position given in level
	reset_player_pos()
	reset_items_collected()
	hud.portal_closed()

func setup_level():  #sets up the level for starting the game after play button pressed on menu
	level_container = get_tree().get_first_node_in_group("Level_container")
	player = get_tree().get_first_node_in_group("Player")
	hud = get_tree().get_first_node_in_group("HUD")
	load_level(starting_level)
	loadup_collectibles()
	

func loadup_collectibles():
	collectibles_positions.clear ##empties the array which has stored the positions of the apples
	collectible_node = get_tree().current_scene.get_node("collectibleNode")
	for c in collectible_node.get_children():
		collectibles_positions.append(c.position)

func respawn_collectibles():
	if collectible_node == null:
		return
	for c in collectible_node.get_children():
		c.queue_free()
	for pos in collectibles_positions:
		var new_c = collectible_scene.instantiate()
		new_c.position = pos
		collectible_node.add_child(new_c)
		

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
		
func respawn_player():
	if hud.current_lives == 0:
		player.dead = true
		await player.sprite.animation_finished
		reset_player_pos()
		reset_items_collected()
		respawn_collectibles()
		hud.reset_lives()

func reset_player_pos():
	var start_pos = get_tree().get_first_node_in_group("PlayerPosition") as Node2D
	player.teleport(start_pos.position)
