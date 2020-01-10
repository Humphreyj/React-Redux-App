import React from 'react';
import { connect } from 'react-redux';
import { getTaco } from '../actions';
import styled from 'styled-components';


 const TacoWrap = styled.div`
    .newTaco {
        width: 85%;
        margin: 0 auto;
        padding: 2%;
        background-color: rgba(0,0,0, 0.8);
        color: white;
        text-shadow: 2px 2px 2px #111;

        

        

        .tacoComponent {
            width: 85%;
            margin: 0 auto;

            .recipe {
                font-family: 'Roboto', sans-serif;
                font-size: 1.2em;
                letter-spacing: .1em;
                font-weight: bold;
            }

        }

        
    }

    .welcome {
        font-size: 2.4em;
        width: 80%;
        margin: 0 auto;
        padding: 25% 0%;
        background-color: rgba(0,0,0, 0.5);
        color: white;
        text-shadow: 2px 2px 2px #111;
    }

    .getTaco {
        background-color: white;
        color: #111;
        font-size: 1.4em;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 1em;
    }
 `
const Taco = (props) => {
    return (
        <TacoWrap>
            
            <button
            onClick={()=> {props.getTaco()}} 
            className="getTaco">Get a taco!</button>

    {
props.taco.base_layer ? 
<div className="newTaco">
    <div className="tacoComponent shell">
        <h3>{props.taco.shell.name}</h3>
        <p className='recipe'>{props.taco.shell.recipe.replace(/\=/g, '').replace(props.taco.shell.name, '')}</p>

    </div>
    
    <div className="tacoComponent base">
        <h3>{props.taco.base_layer.name}</h3>
        <p className='recipe'>{props.taco.base_layer.recipe.replace(/\=/g, '').replace(props.taco.base_layer.name, '')}</p>
    </div>
    
    <div className="tacoComponent seasoning">
        <h3>{props.taco.seasoning.name}</h3>
        <p className='recipe'>{props.taco.seasoning.recipe.replace(/\=/g, '').replace(props.taco.seasoning.name, '')}</p>
    </div>
    
    <div className="tacoComponent mixin">
        <h3>{props.taco.mixin.name}</h3>
        <p className='recipe'>{props.taco.mixin.recipe.replace(/\=/g, '').replace(props.taco.mixin.name, '')}</p>
        
    </div>
    
    <div className="tacoComponent condiment">
        <h3>{props.taco.condiment.name}</h3>
        <p className='recipe'>{props.taco.condiment.recipe.replace(/\=/g, '').replace(props.taco.condiment.name, '')}</p>
        
    </div>
    
   

</div> 
: <div className='welcome'>
    <p>Welcome to Taco Time! Click the button above to generate a random taco complete with recipes!</p>
</div>
    }
            
        </TacoWrap>
    );
}

const mapStateToProps = (state) => {
    return {taco: state.taco, loading: state.loading}
}

export default connect(mapStateToProps,{getTaco})(Taco);
