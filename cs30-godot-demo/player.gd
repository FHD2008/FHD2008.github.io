extends CharacterBody2D


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	position = Vector2(200,100);

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	var speed = 500
	var direction = Input.get_vector("left","right","up", "down");
	print(direction);
	velocity = direction * speed;
	#position += direction * speed * delta
	#position += Vector2(1,0) * 50 * delta;
	#$PlayerImage.rotation += 0.1*delta
	# fast computer  is 0.1s since last frame
	# slow computer  is 0.5s since last frame
