import React from 'react';
import { connect } from 'react-redux';
import { getTaco } from '../actions';
import styled from 'styled-components';


 const TacoWrap = styled.div`
    .newTaco {
        width: 85%;
        margin: 0 auto;
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
        <p>{props.taco.shell.recipe.replace(/\=/g, '').replace(props.taco.shell.name, '')}</p>

    </div>
    
    <div className="tacoComponent base">
        <h3>{props.taco.base_layer.name}</h3>
        <p>{props.taco.base_layer.recipe.replace(/\=/g, '').replace(props.taco.base_layer.name, '')}</p>
    </div>
    
    <div className="tacoComponent seasoning">
        <h3>{props.taco.seasoning.name}</h3>
        <p>{props.taco.seasoning.recipe.replace(/\=/g, '').replace(props.taco.seasoning.name, '')}</p>
    </div>
    
    <div className="tacoComponent mixin">
        <h3>{props.taco.mixin.name}</h3>
        <p>{props.taco.mixin.recipe.replace(/\=/g, '').replace(props.taco.mixin.name, '')}</p>
        
    </div>
    
    <div className="tacoComponent condiment">
        <h3>{props.taco.condiment.name}</h3>
        <p>{props.taco.condiment.recipe.replace(/\=/g, '').replace(props.taco.condiment.name, '')}</p>
        
    </div>
    
   

</div> 
: <h3>Nothing Yet</h3>
    }
            
        </TacoWrap>
    );
}

const mapStateToProps = (state) => {
    return {taco: state.taco, loading: state.loading}
}

export default connect(mapStateToProps,{getTaco})(Taco);
