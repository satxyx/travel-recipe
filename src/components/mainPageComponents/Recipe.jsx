function Recipe(props) {
  return (
    <article className="recipe">
      <img src={ props.recipe.recipeImg } alt="" className="recipe-img" />
      <div className="recipe-container">
        <h4 className="recipe-title">{ props.recipe.recipeName } </h4>
        <p className="recipe-p">{ props.recipe.recipeDescription }</p>
      </div>
      
    </article>
  );
}

export default Recipe;
