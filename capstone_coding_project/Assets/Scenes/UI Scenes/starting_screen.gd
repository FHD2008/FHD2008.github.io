extends Control
@export var play_button: Button
@export var levels_button: Button
@onready var return_button = %"Return Button"
@onready var lvl_one_button = $GridContainer/Level1_Button
@onready var lvl_two_button = $GridContainer/Level2_Button
@onready var lvl_three_button = $GridContainer/Level3_Button

func _ready():
	play_button.pressed.connect(start_game)
	levels_button.pressed.connect(open_levels_page)
	return_button.pressed.connect(return_to_home)
	lvl_one_button.pressed.connect(func(): goto_level(1))
	lvl_two_button.pressed.connect(func(): goto_level(2))
	lvl_three_button.pressed.connect(func(): goto_level(3))
	
func start_game():
	GameManager.starting_level = 1
	get_tree().change_scene_to_file("res://Assets/Scenes/gameplay.tscn")
	
func open_levels_page():
	get_tree().change_scene_to_file("res://Assets/Scenes/UI Scenes/levels_page.tscn")

func goto_level(level_number):
	if level_number == 1:
		GameManager.starting_level = 1
		GameManager.current_level = GameManager.starting_level
		skip_to_game()
	elif level_number == 2:
		GameManager.starting_level = 2
		GameManager.current_level = GameManager.starting_level
		skip_to_game()
	elif level_number == 3:
		GameManager.starting_level = 3
		GameManager.current_level = GameManager.starting_level
		skip_to_game()
		
func skip_to_game():
	get_tree().change_scene_to_file("res://Assets/Scenes/gameplay.tscn")

func return_to_home():
	get_tree().change_scene_to_file("res://Assets/Scenes/UI Scenes/Starting_screen.tscn")
