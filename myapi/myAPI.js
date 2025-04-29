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
        dishIngredients: {
            milk: "120 ml",
            flour: "125 g",
            cocoaPowder: "40g",
            salt: "1/4 teaspoon",
            bakingSoda: "1/2 teaspoon",
            egg: "1",
            sugar: "200g",
            oil: "1/3 cup",
            espresso: "1/2 cup",
            vanilla: "1 teaspoon",
        },
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