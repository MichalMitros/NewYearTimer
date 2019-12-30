function Particle(x, y, hue, isFirework) 
{
	this.pos = createVector(x, y);
	this.firework = isFirework;
	this.lifespan = 255;
	this.hu = hue;
	this.deathspeed = random(4, 20);
	if(this.firework) {
		this.vel = createVector(0, random(-1*(height/30), -1*(height/60)));
	} else {
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(height/150, height/30));
	}
	this.acc = createVector(0, 0);

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.update = function() {
		if(!this.firework) {
			this.vel.mult(0.85);
			this.lifespan -= this.deathspeed;
		}
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.done = function() {
		if(this.lifespan < 0) {
			return true;
		}
		return false;
	}

	this.show = function() {
		if(!this.firework) {
			stroke(this.hu, 255, this.lifespan, this.lifespan);
			strokeWeight(1);
		} else {
			stroke(this.hu, 255, 255, this.lifespan);
			strokeWeight(4);
		}
		point(this.pos.x, this.pos.y);
	}
}