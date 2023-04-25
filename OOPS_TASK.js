// 1.
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    if (rating == undefined) {
      this.rating = "PG";
    } else {
      this.rating = rating;
    }
  }
  getPG(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].rating == "PG") {
        result.push(array[i]);
      }
    }
    return result;
  }
}
var movie1 = new Movie("avengers", "marvel");
var movie2 = new Movie("superman", "dc", "PG15");
var movie3 = new Movie("infinity", "marvel");
var movie4 = new Movie("joker", "dc", "PG18");
console.log(movie1.getPG([movie1, movie2, movie3, movie4]));

// 2.
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get radiusCircle() {
    return this.radius;
  }
  get colorCircle() {
    return this.color;
  }
  set radiusCircle(radius) {
    this.radius = radius;
  }
  set colorCircle(color) {
    this.color = color;
  }
  get toString() {
    return `"Circle[radius=${this.radius}, color=${this.color}]"`;
  }
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle() {
    return 2 * Math.PI * this.radius;
  }
}
var obj1 = new Circle(1.0, "red");
console.log(obj1.radiusCircle);
console.log(obj1.colorCircle);
console.log(obj1.toString);
console.log(obj1.areaCircle);
console.log(obj1.circumferenceCircle);

// 3.
class Person {
  constructor(name, ph, age, id) {
    this.name = name;
    this.ph = ph;
    this.age = age;
    this.id = id;
  }
}
let obj1 = new Person("arun", 12345678901, 20, 1);
console.log(obj1.name, obj1.ph, obj1.age, obj1.id);

// 4.
class uber {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }
  get Price() {
    return this.distance * 10;
  }
}
let obj1 = new Person("arun", 5);
console.log(obj1.Price);
