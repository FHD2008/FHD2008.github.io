extends Parallax2D

@export var scroll_speed = -50

func _process(delta):
	scroll_offset.x += scroll_speed * delta
	# For each child Parallax2D, apply scroll offset scaled by their scroll_scale
	for child in get_children():
		if child is Parallax2D:
			child.scroll_offset.x = scroll_offset.x * child.scroll_scale.x
