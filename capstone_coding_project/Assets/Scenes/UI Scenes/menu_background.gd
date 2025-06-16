extends Parallax2D       

#manages the the background in the 

@export var scroll_speed = -50

func _process(delta): #for autoscrolling
	scroll_offset.x += scroll_speed * delta  #adds the scroll_speed value to the horizontal scroll offset
	
	for child in get_children(): # For each child Parallax2D, apply scroll offset scaled by their scroll_scale
		if child is Parallax2D:
			child.scroll_offset.x = scroll_offset.x * child.scroll_scale.x
