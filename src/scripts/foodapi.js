fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
      let foodList = document.querySelector(".foodList")
      parsedFoods.forEach((food) => {
        foodList.innerHTML += `
        <div>
          <h1>${food.name} </h1>
          <p>${food.type} </p>
          <p>${food.ethnicity} </p>
        </div>
        `
      })
    })