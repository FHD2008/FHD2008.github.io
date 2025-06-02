extends Control
class_name HUD
@export var collectible_label: Label
@export var portal_label: Label
@export var button: Button

func _ready():
	button.pressed.connect(skip_level)

func update_collectibles(number: int):
	collectible_label.text = "x " + str(number)
	
func portal_opened():
	portal_label.text = "Portal has opened!!"
	
func portal_closed():
	portal_label.text = "Portal is closed... collect 4 items to open"

func skip_level():
	GameManager.next_level()
