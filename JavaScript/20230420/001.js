class Sausage {
  constructor(ingredient, taste) {
    this.ingredient = ingredient;
    this.taste = taste;
  }
  taste() {
    console.log(`${this.ingredient}와 ${this.taste} 맛이 난다!`);
  }
}

class FireSausage extends Sausage {
  constructor(ingredient, taste) {
    super(ingredient, taste);
    this.tasteFire = "불맛이 나는 ";
  }

  taste() {
    console.log(
      `${this.tasteFire}${this.ingredient}와 ${this.taste}맛이 난다!`
    );
  }
}

// 오버로딩 ==> 자바스크립트에서는 없는 개념!

// 오바라이딩 - 원래 담을 수 있을 수 있는 것보다 많이 담는다.

const sausage1 = new Sausage("소고기", "파");
sausage1.taste();
const sausage2 = new FireSausage("소고기", "파");
sausage2.taste();

/* 강사님 코드 */
class Sausage {
  constructor(el1, el2) {
    this.inside1 = el1;
    this.inside2 = el2;
  }

  taste() {
    console.log(`와~~${this.inside1}맛과 ${this.inside2}맛이 나는 소세지다!!`);
  }
}

class FireSausage extends Sausage {
  constructor(el1, el2, el3) {
    // this.inside1 = el1;
    // this.inside2 = el2;
    super(el1, el2);
    this.inside3 = el3;
  }

  // 오버로딩
  // taste(el1) {
  //     console.log(`와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`);
  // }

  // taste(el1, el2) {
  //     console.log(`와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`);
  // }

  taste(el1) {
    if (el1) {
      console.log(
        `와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`
      );
    } else {
    }
  }

  // 오버라이딩
  // taste() {
  //     console.log(`와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`);
  // }
}

const fireSausage = new FireSausage("파맛", "불맛", "키위맛");
