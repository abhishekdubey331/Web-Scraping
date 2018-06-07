const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    author: {type: Schema.Types.ObjectId},
    recipeName: String,
    ingredientName: String
});

RecipeSchema.plugin(autoIncrement.plugin, 'Recipe');

const Recipes = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipes;

