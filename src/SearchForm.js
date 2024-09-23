import React from 'react';
import './SearchForm.css';
const SearchForm = props =>{
    const onSubmit =(event)=>{
     event.preventDefault();
     props.onFormSubmit();
    }
    return(
        <div >
            <form onSubmit={onSubmit} className='search-form'>
                <input type='text' placeholder='enter search term' onChange={(event)=>props.onSearchValueChange(event.target.value)}></input>
                <div>
                <button disabled={props.isSearching}>Search</button>
                <button onClick={ props.FeelingFunny} disabled={props.isSearching}>I'm Feeling funny</button>
                </div>
            </form>
        </div>
    );


    };
export default SearchForm;