extends Node


var level_folder_path = "res://Assets/Scenes/Levels/"  #path for the level scenes
var current_level = 1
var starting_level = 1
var items_collected = 0
var player : PlayerController   #sets variable to be of type: PlayerController
var level_container: Node2D   #sets level_container as Node2D
var hud: HUD  #sets variable as HUD node
var collectible_scene = preload("res://Assets/Scenes/collectible.tscn")  #preloads the collectible scene(apple scene)
var collectibles_positions = []  #array to store positions of the apples
var collectible_node: Node2D  #master node for collectibles which will have instantiated children collectibles

	

func _process(_delta):
	end_game() 

func load_level(level_number):
	#check the file path for a new scene(level)
	var level_file_path = level_folder_path + "level_" + str(level_number) + ".tscn"
	var scene = load(level_file_path) as PackedScene      #loads up the file of the scene
	if !scene:                    
		return
	for child in level_container.get_children():   #deletes the all child nodes in the level_container group which stores the level scenes
		child.queue_free()
		await child.tree_exited
	var instant = scene.instantiate()       #opens up a level scene with its heirarchy and child nodes
	level_container.add_child(instant)    #adds the instantiated scene into the group
	
	reset_player_pos() 
	loadup_collectibles()
	reset_items_collected()
	hud.portal_closed()

func setup_level():  #sets up the level for starting the game after play button pressed on menu
	level_container = get_tree().get_first_node_in_group("Level_container")
	player = get_tree().get_first_node_in_group("Player")
	hud = get_tree().get_first_node_in_group("HUD")
	load_level(starting_level)
	
	

func loadup_collectibles():  #loads up the apples with their relative positions
	collectibles_positions.clear() ##empties the array which has stored the positions of the apples
	collectible_node = get_tree().get_first_node_in_group("collectibles_Group")
	for c in collectible_node.get_children():
		collectibles_positions.append(c.position)  #adds the postition of each collectible in an array
		
	print(collectibles_positions)
func respawn_collectibles():
	for c in collectible_node.get_children():   #deletes existing apples
		c.queue_free()
	for pos in collectibles_positions:        #adds new apples into the same position they were before as stored in the array
		var new_c = collectible_scene.instantiate()
		new_c.position = pos
		collectible_node.add_child(new_c)
	print("respawn collectible")

func next_level():   #launches next level by adding 1 into current_level and passing that into load_level() function
	current_level += 1
	load_level(current_level)
	loadup_collectibles()
	print("Player has been teleported to level " + str(current_level))

func reset_items_collected():   #resets the number of apples collected
	items_collected = 0
	hud.collectible_label.text = "x " + "0"
	
func add_collectible():        #adds up the score of items colleccted
	items_collected += 1
	hud.update_collectibles(items_collected)
	if items_collected == 4:    #when 4 items collected then the portal is opened
		hud.portal_opened()
		
func respawn_player():
	if hud.current_lives == 0:    #if lives of the player finishes death animation is played and everything in the level is resetted
		player.dead = true
		await player.sprite.animation_finished
		reset_player_pos()
		respawn_collectibles()
		reset_items_collected()
		hud.reset_lives()
		hud.portal_closed()
	elif player.position.y >= 768:  #if the player falls into the void it does same as what's done when lives finish
		reset_player_pos()
		respawn_collectibles()
		reset_items_collected()
		hud.portal_closed()
		hud.reset_lives()

func reset_player_pos():  #resets the position of the player to position of Node called PlayerPosition which is basically a position holder
	var start_pos = get_tree().get_first_node_in_group("PlayerPosition") as Node2D
	player.teleport(start_pos.position)

func end_game():    #turns off the HUD in last level which is a thank you page
	if current_level == 4:
		hud.visible = false
		player.camera.set_limit(SIDE_BOTTOM, 288)
