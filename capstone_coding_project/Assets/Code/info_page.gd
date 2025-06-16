extends CanvasLayer
@export var info_button: Button
@onready var return_button = $Panel/ReturnButton #sets the variable to he ReturnButton node 

func _ready():
	visible = true   #shows the info overlay page when game starts
	info_button.pressed.connect(show_info)    
	return_button.pressed.connect(return_to_game)

	
func show_info():   #shows the info overlay page which has instructions when info button is pressed
	visible = true
	get_tree().paused = true #pauses the game
	info_button.visible = false #hides info button when the overlay is open
	

func return_to_game(): #resumes game and hides the overlay
	visible = false
	info_button.visible = true
	get_tree().paused = false

	
