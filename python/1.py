class Car:
  speed = 0
  def upspeed(self,value):
    self.speed += value
    print("현재 속도:",self.speed)

class Sedan(Car):
  def upspeed(self,value):
    self.speed += value
    if self.speed > 150:
      self.speed = 150
      print(self.speed)

class Truck(Car):
  pass

truck1=Truck()
sedan1=Sedan()

truck1.upspeed(200)
sedan1.upspeed(300)