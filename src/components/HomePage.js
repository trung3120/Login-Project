import { Component } from 'react';
import animals from './AnimalList';


export default class HomePage extends Component {
    componentWillUnmount = () => {
        // alert('Bạn đã đăng xuất!!');
    }

    render() {
        return(
            <div>
                <div className="homepage">
                    <h1>Welcome!</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Trivial Name</th>
                                <th>Live in</th>
                                <th>Rare?</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                animals.map(animals => (
                                    <tr>
                                        <td>{animals.id}</td>
                                        <td>{animals.trivialName}</td>
                                        <td>{animals.liveIn}</td>
                                        <td>{animals.rare}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button 
                        className="btn" 
                        type="button" 
                        onClick={
                            this.props.onLogOut
                        }
                    >Log out
                    </button>
                </div>
            </div>
        );
    }
}