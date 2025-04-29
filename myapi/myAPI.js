const Joi = require('joi');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const dishes = [
    {
        id: 1,
        dishName: 'Chocolate cupcakes (Brownie)',
        dishImgSrc: 'https://thecookingfoodie.com/wp-content/uploads/2025/02/IMG_2225-2-1306x1536.jpg',
        dishIngredients: [
            ["milk",120, "ml"],
            ["flour",125, "g"],
            ["cocoa powder", 40, "g"],
            ["salt", 1/4, "teaspoon"],
            ["baking soda", 1/2, "teaspoon"],
            ["egg", 1],
            ["sugar", 200, "g"],
            ["oil", 1/3, "cup"],
            ["espresso", 1/2, "cup"],
            ["vanilla", 1, "teaspoon"],
        ],
        dishPrepSteps: [
            "Preheat oven to 350°F (175°C). Line a 12-cup muffin pan with cupcake liners.",
            "In a large bowl sift flour, cocoa powder, baking soda and salt. Add sugar, stir and set aside.",
            "In a separate bowl whisk all wet ingredients.",
            "Add dry ingredients to wet ingredients and whisk just until combined. don’t overmix.",
            "Scoop the batter into cupcake liners.",
            "Bake for 18-20 minutes, or until a toothpick inserted in the center comes out clean.",
            "Allow to cool completely.",
        ],
        source: 'https://thecookingfoodie.com/recipe/the-best-chocolate-cupcakes-recipe/',
        author: 'David from TheCookingFoodie',
    }, {
        id:2,
        dishName: 'Great Pizza',
        dishImgSrc: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-07/12/13/asset/buzzfeed-prod-web-06/sub-buzz-1716-1531418025-2.png?downsize=600:*&output-format=auto&output-quality=auto',
        dishIngredients: {
            flour: "7 and 1/4 cup",
            salt: "1 and 1/2 teaspoon",
            tomatoSauce: "28 ounces",
            cheese: "200g",
            yeast: "2 teaspoon",
            sugar: "1 teaspoon",
            oliveOil: "6 tablespoon",
        },
        dishPrepSteps: [
            "For your dough: get the water to the right temperature to bloom the yeast.",
            "Make sure your yeast is alive and reacting.",
            "When it comes to kneading the dough, don't be lazy — and really take the time to do it.",
            "This is the kneading motion you should go for:",
            "To know when you're done kneading, press the dough with your finger. If it springs back right away, it's ready.",
            "Coat the bowl where the dough will rise with olive oil — and coat the top of the dough, too.",
            "If you can, let the dough rise overnight.",
            "After the dough has risen, knead for another minute or two to even out the dough and release some of the air bubbles.",
            "Once you've shaped each ball of dough, cover them with a bit of flour and a towel and let them rise for another hour.",
            "Before working on your toppings and putting the pizza together, get your oven as hot as it can be.",
            "And preheat a pan or pizza stone in the oven to create great bottom heat.",
            "There are several techniques you can use to stretch the dough, but if you want to play it safe, just use your hands to gently stretch it:",
            "Assemble the pizza on a turned-over baking sheet sprinkled with a bit of semolina.",
            "Time to assemble your pizza with all the toppings you can dream of. Just make sure you act fast.",
            "Time to pop it into the oven! It should take about 12 to 15 minutes.",
        ],
        source: 'https://www.buzzfeed.com/marietelling/pizza-dough-recipe?utm_term=.ioz4kpD7lA#.lsDMVvejlW',
        author: 'Marie Telling, ClaireKing, Brenda Blanco',
    },{
        id:3,
        dishName: 'Fruit tarts',
        dishImgSrc: 'https://thekitchenbachelor.com/wp-content/uploads/2021/10/lemon-tartlet-3-IG-Feed-500x500.jpg',
        dishIngredients: {
            "flour": "1 and 1/4 cup",
            "salt": "1 teaspoon",
            "sugar": "5/6 cup",
            "butter": "12 tablespoon",
            "egg": 1,
            "vanilla": "2 teaspoon",
            "eggYolks": 5,
            "cornStarch": "3 tablespoon",
            "milk": "1 cup",
            "heavyCream": "1 cup",
        },
        dishPrepSteps: [
            "For your dough: get the water to the right temperature to bloom the yeast.",
            "Make sure your yeast is alive and reacting.",
            "When it comes to kneading the dough, don't be lazy — and really take the time to do it.",
            "This is the kneading motion you should go for:",
            "To know when you're done kneading, press the dough with your finger. If it springs back right away, it's ready.",
            "Coat the bowl where the dough will rise with olive oil — and coat the top of the dough, too.",
            "If you can, let the dough rise overnight.",
            "After the dough has risen, knead for another minute or two to even out the dough and release some of the air bubbles.",
            "Once you've shaped each ball of dough, cover them with a bit of flour and a towel and let them rise for another hour.",
            "Before working on your toppings and putting the pizza together, get your oven as hot as it can be.",
            "And preheat a pan or pizza stone in the oven to create great bottom heat.",
            "There are several techniques you can use to stretch the dough, but if you want to play it safe, just use your hands to gently stretch it:",
            "Assemble the pizza on a turned-over baking sheet sprinkled with a bit of semolina.",
            "Time to assemble your pizza with all the toppings you can dream of. Just make sure you act fast.",
            "Time to pop it into the oven! It should take about 12 to 15 minutes.",
        ],
        source: 'https://youtube.com/shorts/tcdPOV-0oSY?si=o-CjsKtGeOmusteQ',
        author: 'Jose.elCook',
    },{
        id:4,
        dishName: 'Ratatouille',
        dishImgSrc: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/07/ratatouille-recipe.jpg',
        dishIngredients: {
            "olive oil": "2 tbsp",
            "salt": "1 teaspoon",
            "eggplant": "1",
            "butter": "12 tablespoon",
            "zucchini": 1,
            "bell pepper": "1",
            "onion": 1,
            "garlic": "4 cloves",
            "tomatoes": "4",
            "black pepper": "1/8 tsp",
        },
        dishPrepSteps: [
            "Prep and salt the eggplant",
            "Sauté vegetables separately",
            "Cook aromatics",
            "Add tomatoes",
            "Simmer on low heat for 20–30 minutes, uncovered, stirring occasionally. Vegetables should be tender but not mushy.",
            "Taste and adjust seasoning."
        ],
        source: 'https://theculinarytravelguide.com/the-jc100-ratatouille/',
        author: 'Julia Child',
    },{
        id:5,
        dishName: 'Xiao Long Bao (Soup Dumplings) Recipe',
        dishImgSrc: 'https://redhousespice.com/wp-content/uploads/2020/06/Xiao-Long-Bao-Soup-Dumplings-13-1024x1536.jpg',
        dishIngredients: {
            "whole chicken": "1",
            "flour": "400g",
            "water": "200ml",
            "minced pork": "500g",
            "soy sauce": "1 tbsp",
            "sugar": "1 tsp",
            "salt": "½ tsp",
            "white pepper": "¼ tsp",
            "sesame oil": "1 tsp",
            "minced ginger": "1 tbsp",
            "minced scallions": "1 tbsp",
        },
        dishPrepSteps: [
            "Place the whole chicken in a well-sealed oven-safe dish (like a Dutch oven).",
            "Roast at 200°C (392°F) for about 1 hour. The chicken will release a rich broth.",
            "Collect the broth and refrigerate until it solidifies into a jelly-like consistency.",
            "Once set, finely chop the aspic into small cubes.",
            "Gradually add warm water to the flour, mixing until a dough forms.",
            "Knead the dough until smooth and elastic.",
            "Cover with a damp cloth and let it rest for at least 30 minutes.",
            "In a bowl, combine minced pork with soy sauce, Shaoxing wine, sugar, salt, white pepper, sesame oil, ginger, and scallions.",
            "Mix until the filling becomes sticky and well combined.",
            "Fold in the finely chopped aspic, ensuring even distribution.​",
            "Divide the rested dough into small portions and roll each into a thin circle (~8cm diameter).",
            "Place a spoonful of filling in the center of each wrapper.",
            "Pleat and seal the edges to form a bun, ensuring it's tightly closed to trap the soup.",
            "Line a bamboo steamer with parchment paper or cabbage leaves to prevent sticking.",
            "Place the dumplings inside, ensuring they don't touch each other.",
            "Steam over boiling water for about 8 minutes."
        ],
        source: 'https://redhousespice.com/xiao-long-bao-soup-dumplings/',
        author: 'Wei Guo',
    },{
        "id": 6,
        "dishName": "BA's Best Lasagna",
        "dishImgSrc": "https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_2560%2Cc_limit/20231120-WEB-Lasanga-6422.jpg",
        "dishIngredients": {
          "ground pork": "2 lb",
          "ground beef chuck (20% fat)": "1 lb",
          "kosher salt": "to taste",
          "freshly ground black pepper": "to taste",
          "extra-virgin olive oil": "2 tbsp",
          "pancetta or thick-cut bacon, finely chopped": "2 oz",
          "medium yellow onion, finely chopped": "1",
          "medium carrot, peeled, finely chopped": "1",
          "celery stalk, finely chopped": "1",
          "garlic cloves, finely chopped": "4",
          "tomato paste": "1/4 cup",
          "whole peeled tomatoes with juices": "2 (28 oz) cans",
          "whole milk": "1 cup",
          "unsalted butter": "5 tbsp",
          "all-purpose flour": "1/4 cup",
          "whole milk (for béchamel)": "4 cups",
          "freshly grated nutmeg": "1/4 tsp",
          "Parmesan cheese, finely grated": "1 1/2 cups",
          "lasagna noodles (preferably De Cecco)": "1 lb"
        },
        "dishPrepSteps": [
          "Preheat oven to 225°F (107°C).",
          "In a large bowl, combine ground pork and ground beef. Season with salt and pepper. Form into 18 large meatballs.",
          "Heat olive oil in a large Dutch oven over medium-high heat. Working in batches, cook meatballs until browned on all sides. Transfer to a plate.",
          "In the same pot, add pancetta and cook until browned. Add onion, carrot, and celery; cook until softened. Add garlic and cook until fragrant.",
          "Stir in tomato paste and cook until darkened. Add whole peeled tomatoes with juices, breaking them up with a spoon.",
          "Return meatballs to the pot. Bring to a simmer, cover, and transfer to the oven. Cook for 2 hours.",
          "Remove from oven. Using a spoon, break meatballs into small pieces. Stir in 1 cup of milk. Simmer over medium heat until sauce thickens.",
          "In a saucepan, melt butter over medium heat. Whisk in flour and cook until golden. Gradually whisk in 4 cups of milk. Bring to a boil, reduce heat, and simmer until thickened. Season with nutmeg and salt. Stir in 1 cup of Parmesan cheese.",
          "Cook lasagna noodles according to package instructions. Drain and set aside.",
          "Preheat oven to 375°F (190°C). Spread a thin layer of meat sauce in a 13x9\" baking dish. Layer noodles, meat sauce, béchamel, and Parmesan. Repeat layers, ending with béchamel and Parmesan on top.",
          "Cover with foil and bake for 45 minutes. Remove foil and bake until top is browned and bubbly, about 15 minutes more.",
          "Let lasagna rest for 30 minutes before serving."
        ],
        "source": "https://www.bonappetit.com/recipe/ba-best-lasagna",
        "author": "Chris Morocco"
      },{
        "id": 7,
        "dishName": "Chicken Alfredo",
        "dishImgSrc": "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-3.jpg",
        "dishIngredients": {
          "fettuccine pasta": "16 ounces",
          "boneless, skinless chicken breasts": "1 pound",
          "Italian seasoning": "1 teaspoon",
          "kosher salt": "3/4 teaspoon",
          "black pepper": "1/4 teaspoon",
          "extra-virgin olive oil": "2 tablespoons",
          "butter": "1 tablespoon",
          "unsalted butter": "1/2 cup (for sauce)",
          "heavy whipping cream": "2 cups",
          "garlic clove, minced": "1",
          "garlic powder": "3/4 teaspoon",
          "Italian seasoning (for sauce)": "3/4 teaspoon",
          "salt (for sauce)": "1/4 teaspoon",
          "black pepper (for sauce)": "1/4 teaspoon",
          "Parmesan cheese, freshly grated": "2 cups"
        },
        "dishPrepSteps": [
          "Bring a large pot of salted water to a boil. Cook the fettuccine according to package instructions until al dente. Drain and set aside.",
          "Season both sides of the chicken breasts with Italian seasoning, kosher salt, and black pepper.",
          "In a large skillet over medium-high heat, heat the olive oil and butter. Add the seasoned chicken breasts and cook for 4-5 minutes per side, or until golden brown and cooked through. Remove from the skillet and set aside.",
          "In the same skillet, melt the unsalted butter over medium heat. Add the minced garlic and sauté for about 30 seconds until fragrant.",
          "Pour in the heavy whipping cream, then add garlic powder, Italian seasoning, salt, and pepper. Stir to combine and bring to a gentle simmer.",
          "Reduce the heat to low and gradually stir in the freshly grated Parmesan cheese until the sauce is smooth and creamy.",
          "Slice the cooked chicken into strips.",
          "Add the cooked fettuccine to the sauce, tossing to coat the pasta evenly.",
          "Top the pasta with the sliced chicken.",
          "Serve immediately, garnished with additional Parmesan cheese if desired."
        ],
        "source": "https://bellyfull.net/chicken-alfredo-recipe/",
        "author": "Amy Flanigan"
      },{
        "id": 8,
        "dishName": "Homemade Mac and Cheese",
        "dishImgSrc": "https://tastesbetterfromscratch.com/wp-content/uploads/2014/07/Mac-and-Cheese-7.jpg",
        "dishIngredients": {
          "elbow macaroni": "1/2 lb",
          "butter": "3 tablespoons",
          "all-purpose flour": "2 tablespoons",
          "salt": "1/2 teaspoon",
          "ground black pepper": "1/8 teaspoon",
          "milk": "1 1/2 cups",
          "half and half": "3/4 cup",
          "shredded cheddar cheese": "2 1/2 cups"
        },
        "dishPrepSteps": [
          "Preheat the oven to 325°F (163°C) and lightly grease an 8-inch square baking dish.",
          "Cook the elbow macaroni in salted boiling water until al dente. Drain and set aside.",
          "In a medium saucepan over medium heat, melt the butter.",
          "Whisk in the flour, salt, and pepper, and cook for 2 minutes to form a roux.",
          "Gradually whisk in the milk and half and half, stirring constantly until the mixture thickens.",
          "Remove the saucepan from heat and stir in 1 cup of the shredded cheddar cheese until melted and smooth.",
          "Add the cooked macaroni to the cheese sauce and stir to coat evenly.",
          "Pour half of the macaroni and cheese mixture into the prepared baking dish and sprinkle with 1/2 cup of the remaining cheese.",
          "Add the remaining macaroni and cheese mixture on top and sprinkle with the remaining 1 cup of cheese.",
          "Bake in the preheated oven for 20-25 minutes, or until the cheese is melted and bubbly."
        ],
        "source": "https://tastesbetterfromscratch.com/homemade-mac-and-cheese/",
        "author": "Lauren Allen"
      },{
        "id": 9,
        "dishName": "Grilled Cheese Sandwich",
        "dishImgSrc": "https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-3.jpg",
        "dishIngredients": {
          "sourdough bread": "2 slices",
          "salted butter": "2 tablespoons",
          "cheddar cheese, shredded": "1/2 cup",
          "mozzarella cheese, shredded": "1/2 cup"
        },
        "dishPrepSteps": [
          "Preheat a skillet over medium heat.",
          "Butter one side of each slice of bread.",
          "Place one slice of bread, buttered side down, onto the skillet.",
          "Top with shredded cheddar and mozzarella cheeses.",
          "Place the second slice of bread on top, buttered side up.",
          "Cook until the bottom slice is golden brown, about 2-3 minutes.",
          "Flip the sandwich and cook the other side until golden brown and the cheese is melted, another 2-3 minutes.",
          "Remove from skillet, slice in half, and serve immediately."
        ],
        "source": "https://natashaskitchen.com/grilled-cheese-sandwich/",
        "author": "Natasha Kravchuk"
      }
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/dishes', (req, res) => {
    res.send(dishes);
});

app.post('/api/dishes', (req,res) => {
    const {error} = validateDish(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const dish = {
        id: dishes.length + 1,
        dishName: req.body.dishName
    };
    dishes.push(dish);
    res.send(dish);
});

app.put('/api/dishes/:id', (req, res) => {
    const dish = dishes.find(c => c.id === parseInt(req.params.id));
    if(!dish) {
        return res.status(404).send('The dish with the given id was not found.');
    };

    const {error} = validateDish(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    dish.dishName = req.body.dishName;
    res.send(dish);
});

app.delete('/api/dishes/:id', (req, res) => {
    const dish = dishes.find(c => c.id === parseInt(req.params.id));
    if(!dish) return res.status(404).send('The dish with the given id was not found.');

    const index = dishes.indexOf(dish);
    dishes.splice(index, 1);

    res.send(dish);
});

function validateDish (dish) {
    const schema = Joi.object({
        dishName: Joi.string().min(3).required()
    });

    return schema.validate(dish);
}

app.get('/api/dishes/:id', (req, res) => {
    const dish = dishes.find(c => c.id === parseInt(req.params.id));
    if(!dish) return res.status(404).send('The dish with the given id was not found.');
    res.send(dish);
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on port ${port}...`)
});