// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div class="display">
            <div class="caption">
                <div class="facebook">facebook</div>
                <div class="text">Facebook helps you connect and
                    <div>share with people in your life</div>
                </div>
            </div>
            <div class="box ">
                <input class="button" type="email" placeholder="Email adress or phone number" />
                <input class="button" type="password" placeholder="Password" />
                <button class="login">Log In</button>
                <div class="forgetP">Forgotten password</div>
                <hr />
                <div class="Align"><button class="bodybutton">create New Account</button>
                </div>
            </div>
        </div>
    );
}

export default App;
