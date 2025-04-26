const Joi = require('joi');
const express = require('express');
const app = express();

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