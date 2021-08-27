import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
const Header = () => {
  const [ itemsSelected, setItemsSelected ] = useState(0)
  const [ item, setItem ] = useState(null)
  const [ links, setLinks ] = useState([
    {
      url: 'https://www.hnginternship.com/',
      text: 'Home'
    },
    {
      url: 'https://github.com/airbnb/hypernova',
      text: 'Powered by hypernova & frontend magic'
    },
    {
      url: 'https://github.com/heisdeku',
      text: 'Bootstrapped by Deku.'
    }
  ])
  useEffect(() => {
    document.addEventListener('itemSelected', itemSelected);
    return () => {
      document.removeEventListener('itemSelected', itemSelected);
    }
  })

  const itemSelected = ({ detail: item }) => {    
    setItemsSelected(prev => prev + 1)
    setItem(item)
    //this.setState({ itemsSelected: itemsSelected + 1, item });
  }
  return (
    <header className="k-header">
      <div className="k-header__brand">ChekCart</div>
      { item && <span className="k-header__last-item">{`Last Item: ${item.title}`}</span> }
      <span className="k-header__space" />
      <span>{`Items Clicked: ${itemsSelected}`}</span>
      <NavBar links={links} />
    </header>
  );
}


export default Header;
