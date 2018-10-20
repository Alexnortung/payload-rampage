const valueBetween = (value, b1,b2) =>{
  const min = Math.min(b1,b2);
  const max = Math.max(b1,b2);
  if (value > min && value < max) {
    return true;
  } else {
    return false;
  }
}

const isPointInsideRectangle = (point, point1, point2) =>{
  if (valueBetween(point.x, point1.x, point2.x) && valueBetween(point.y, point1.y, point2.y)) {
    return true;
  } else {
    return false;
  }
}

const isRectangleOverlapping = (rect1point1, rect1point2, rect2point1, rect2point2){
  const rect1point3 = new Vector(rect1point1.x, rect1point2.y);
  const rect1point4 = new Vector(rect1point2.x, rect1point1.y);
  const rect1points = [rect1point1, rect1point2, rect1point3, rect1point4];

  const rect2point3 = new Vector(rect2point1.x, rect2point2.y);
  const rect2point4 = new Vector(rect2point2.x, rect2point1.y);
  const rect2points = [rect2point1, rect2point2, rect2point3, rect2point4];

  for (var i = 0; i < rect1points.length; i++) {
    if (isPointInsideRectangle(rect1points[i], rect2point1, rect2point2)) {
      // found overlapping
      return true;
    }

  }

  for (var i = 0; i < rect2points.length; i++) {
    if (isPointInsideRectangle(rect2points[i], rect1point1, rect1point2)) {
      // found overlapping
      return true;
    }
  }

  return false;




}
