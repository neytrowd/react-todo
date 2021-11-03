import './app.css';
import {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import AddItem from "./pages/add-item";
import ItemList from "./pages/item-list";
import NotFound from "./pages/not-found";
import TodoListHeader from "./components/todo-list-header";

export default class App extends Component {
    state = {
        items: [],
        filter: 'all'
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items'))
        if (items) {
            this.setState({items});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('items', JSON.stringify(this.state.items));
    }

    render() {
        return (
            <div className="todo-list">
                <TodoListHeader/>
                <Switch>
                    <Route exact path='/' component={() => <ItemList
                        state={this.state} changeState={this.setState.bind(this)}/>}/>

                    <Route exact path='/add' component={() => <AddItem
                        state={this.state} changeState={this.setState.bind(this)}/>}/>

                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        );
    }
}
