extends Node2D

func _ready():   #calls setup level function in GameManager when the scene is launched
	GameManager.setup_level()
