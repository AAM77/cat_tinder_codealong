import React from 'react';
import CatCard from './CatCard';
import { connect } from 'react-redux'


const NextUpCats = ({ cats }) => {
  const catCards = cats.map( cat => <CatCard key={cat.id} cat={cat} />)

  return (
    <div className="NextUpCats">
      { catCards }
    </div>
  );
}

const mapStateToProps = (state) => {
  return (
    {
      cats: state.cats.filter( cat => cat.status === "undecided" ).slice(1,4)
    }
  )
}

// the connect function takes in an argument,
// but then returns a function that accepts
// the component as an argument.

export default connect(mapStateToProps)(NextUpCats);
