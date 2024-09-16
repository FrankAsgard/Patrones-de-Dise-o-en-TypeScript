// builder-pattern.ts

//Meal

interface Meal {
    mainCourse: string;
    sideDish?: string;
    drink?: string;
  }
  
  class MealBuilder {
    private meal: Meal = { mainCourse: '' };
  
    setMainCourse(mainCourse: string): this {
      this.meal.mainCourse = mainCourse;
      return this;
    }
  
    setSideDish(sideDish: string): this {
      this.meal.sideDish = sideDish;
      return this;
    }
  
    setDrink(drink: string): this {
      this.meal.drink = drink;
      return this;
    }
  
    build(): Meal {
      return this.meal;
    }
  }
  
  // Usage
  const meal = new MealBuilder()
    .setMainCourse('Steak')
    .setSideDish('Fries')
    .setDrink('Wine')
    .build();
  
  console.log(meal);
  