import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Food from './Food/Food.jsx';
import Card from './Card/Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student/Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx'


function App() {

  const fruits = [
                    {id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}
                ];



  const Veggies = [
                    {id: 6, name: "apple", calories: 95}, 
                    {id: 7, name: "orange", calories: 45}, 
                    {id: 8, name: "banana", calories: 105}, 
                    {id: 9, name: "coconut", calories: 159}, 
                    {id: 10, name: "pineapple", calories: 37}
                ];


  return(
    <>
    <List items={fruits} category="Fruits"/>
    <List items={Veggies} category="Veggies"/>
    </>
  );

}

export default App
