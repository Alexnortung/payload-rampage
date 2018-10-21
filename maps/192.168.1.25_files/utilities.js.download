const valueBetween = (value, b1,b2) =>{
  const min = Math.min(b1,b2);
  const max = Math.max(b1,b2);
  if (value > min && value < max) {
    return true;
  } else {
    return false;
  }
}

const valueBetweenOrEqueal = (value, b1,b2) =>{
  const min = Math.min(b1,b2);
  const max = Math.max(b1,b2);
  if (value >= min && value <= max) {
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

const isPointInsideRectangleOrEqual = (point, point1, point2) =>{
  if (valueBetweenOrEqueal(point.x, point1.x, point2.x) && valueBetweenOrEqueal(point.y, point1.y, point2.y)) {
    return true;
  } else {
    return false;
  }
}

const isRectangleOverlapping = (rect1point1, rect1point2, rect2point1, rect2point2, debug)=>{
  const rect1diffVector = rect1point2.subtract(rect1point1).divideBy(2);
  const rect1point3 = new Vector(rect1point1.x, rect1point2.y);
  const rect1point4 = new Vector(rect1point2.x, rect1point1.y);
  const rect1midpoint1 = new Vector(rect1point1.x + rect1diffVector.x , rect1point1.y);
  const rect1midpoint2 = new Vector(rect1point2.x, rect1point1.y + rect1diffVector.y);
  const rect1midpoint3 = new Vector(rect1point1.x + rect1diffVector.x , rect1point2.y);
  const rect1midpoint4 = new Vector(rect1point1.x, rect1point1.y + rect1diffVector.y );
  const rect1points = [rect1point1, rect1point2, rect1point3, rect1point4,
      rect1midpoint1,rect1midpoint2, rect1midpoint3, rect1midpoint4];


  const rect2diffVector = rect2point2.subtract(rect2point1).divideBy(2);
  const rect2point3 = new Vector(rect2point1.x, rect2point2.y);
  const rect2point4 = new Vector(rect2point2.x, rect2point1.y);
  const rect2midpoint1 = new Vector(rect2point1.x + rect2diffVector.x , rect2point1.y);
  const rect2midpoint2 = new Vector(rect2point2.x, rect2point1.y + rect2diffVector.y);
  const rect2midpoint3 = new Vector(rect2point1.x + rect2diffVector.x , rect2point2.y);
  const rect2midpoint4 = new Vector(rect2point1.x, rect2point1.y + rect2diffVector.y );
  const rect2points = [rect2point1, rect2point2, rect2point3, rect2point4,
    rect2midpoint1,rect2midpoint2, rect2midpoint3, rect2midpoint4];

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

const isRectangleOverlappingOrEqual = (rect1point1, rect1point2, rect2point1, rect2point2, debug)=>{
  const rect1diffVector = rect1point2.subtract(rect1point1).divideBy(2);
  const rect1point3 = new Vector(rect1point1.x, rect1point2.y);
  const rect1point4 = new Vector(rect1point2.x, rect1point1.y);
  const rect1midpoint1 = new Vector(rect1point1.x + rect1diffVector.x , rect1point1.y);
  const rect1midpoint2 = new Vector(rect1point2.x, rect1point1.y + rect1diffVector.y);
  const rect1midpoint3 = new Vector(rect1point1.x + rect1diffVector.x , rect1point2.y);
  const rect1midpoint4 = new Vector(rect1point1.x, rect1point1.y + rect1diffVector.y );
  const rect1points = [rect1point1, rect1point2, rect1point3, rect1point4,
      rect1midpoint1,rect1midpoint2, rect1midpoint3, rect1midpoint4];


  const rect2diffVector = rect2point2.subtract(rect2point1).divideBy(2);
  const rect2point3 = new Vector(rect2point1.x, rect2point2.y);
  const rect2point4 = new Vector(rect2point2.x, rect2point1.y);
  const rect2midpoint1 = new Vector(rect2point1.x + rect2diffVector.x , rect2point1.y);
  const rect2midpoint2 = new Vector(rect2point2.x, rect2point1.y + rect2diffVector.y);
  const rect2midpoint3 = new Vector(rect2point1.x + rect2diffVector.x , rect2point2.y);
  const rect2midpoint4 = new Vector(rect2point1.x, rect2point1.y + rect2diffVector.y );
  const rect2points = [rect2point1, rect2point2, rect2point3, rect2point4,
    rect2midpoint1,rect2midpoint2, rect2midpoint3, rect2midpoint4];

  for (var i = 0; i < rect1points.length; i++) {
    if (isPointInsideRectangleOrEqual(rect1points[i], rect2point1, rect2point2)) {
      // found overlapping
      return true;
    }

  }

  for (var i = 0; i < rect2points.length; i++) {
    if (isPointInsideRectangleOrEqual(rect2points[i], rect1point1, rect1point2)) {
      // found overlapping
      return true;
    }
  }

  return false;

}
