import React from 'react';

export const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    key = 'list';
  
    saveToStorage = ( list ) => {
        localStorage.setItem('list', JSON.stringify(list));
      }
    getFromStorage = ( ) => {
        const result = localStorage.getItem('list');
        console.log('result',result);
        return result ? JSON.parse(result) : [];
      }

    
    render() {
      return <WrappedComponent saveToStorage={this.saveToStorage} getFromStorage={this.getFromStorage}/>;
    }
  }
    
  return HOC;
};


// export const WithStorage = (WrappedComponent) => {
//   const key = 'list';
  
//   const saveToStorage = ( list ) => {
//     localStorage.setItem(key, list);
//   }
//   const getFromStorage = ( ) => {
//     const result = localStorage.getItem(key);
//     return result ? JSON.Parse(result) : [];
//   }

//   return (
//     <WrappedComponent />
//   )

// }