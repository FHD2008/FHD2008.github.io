extends Control
class_name HUD
@export var collectible_label: Label
@export var portal_label: Label
@export var skip_button: Button
@export var healthbar: Panel
@onready var lives = [
	$Panel/Heart1,
	$Panel/Heart2,
	$Panel/Heart3
]
var current_lives = 3
var portal: Portal
func _ready():   #gets the portal node, resets lives, and connects skip button to skip_level function on launch of the HUD scene
	portal = get_tree().get_first_node_in_group("Level_Exit")
	reset_lives()
	skip_button.pressed.connect(skip_level)

func update_collectibles(number): 
	collectible_label.text = "x " + str(number) + " apple(s) collected"
	
func portal_opened():  #calls open_portal function in Portal scene and modifies the portal label
	portal.open_portal()
	portal_label.text = "Portal has opened!!"
	
func portal_closed():  #calls close_portal function in Portal scene and modifies the portal label
	portal = get_tree().get_first_node_in_group("Level_Exit") #gets the portal node again to avoid errors when player respawns
	portal.close_portal()
	portal_label.text = "Portal is closed... collect 4 apples to open"

func skip_level(): #skips level by calling next_level function in  GameManager
	GameManager.next_level()

func decrease_lives():  #decreases hearts by hiding each by getting them by index in the array: lives
	if current_lives > 0:
		current_lives -= 1
		lives[current_lives].visible = false

func reset_lives():   #resets visibility of the hearts and resets variable of current_lives
	current_lives = 3
	for items in 3:
		lives[items].visible = true
