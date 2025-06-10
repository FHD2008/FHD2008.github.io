extends Control
class_name HUD
@export var collectible_label: Label
@export var portal_label: Label
@export var skip_button: Button
@export var healthbar: Panel
var current_lives = 3
@onready var lives = [
	$Panel/Heart1,
	$Panel/Heart2,
	$Panel/Heart3
]

func _ready():
	reset_lives()
	skip_button.pressed.connect(skip_level)

func update_collectibles(number: int):
	collectible_label.text = "x " + str(number)
	
func portal_opened():
	portal_label.text = "Portal has opened!!"
	
func portal_closed():
	portal_label.text = "Portal is closed... collect 4 items to open"

func skip_level():
	GameManager.next_level()

func decrease_lives():
	if current_lives > 0:
		current_lives -= 1
		lives[current_lives].visible = false
	if current_lives == 0:
		GameManager.respawn_player()

func reset_lives():
	current_lives = 3
	for items in 3:
		lives[items].visible = true
