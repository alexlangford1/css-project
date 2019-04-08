import React, { Component } from "react"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: false,
        }
    }

    dropDown = () => {
        this.setState({ menu: !this.state.menu })
    }
    close = () => {
        if (this.state.menu) {
            this.setState({ menu: false })
        }
    }

    render() {
        return (
            <div>
                <div className="App">
                    <div
                        className={
                            this.state.menu ? "drop-down down" : "drop-down"
                        }
                    >
                        <span>SERVICES</span>
                        <span>PORTFOLIO</span>
                        <span>ABOUT</span>
                        <span>TEAM</span>
                        <span>CONTACT</span>
                    </div>
                    <div onClick={this.close}>
                        <header className="header">
                            <h1 className="title">Start BootStrap</h1>
                            <div className="about">
                                <span>SERVICES</span>
                                <span>PORTFOLIO</span>
                                <span>ABOUT</span>
                                <span>TEAM</span>
                                <span>CONTACT</span>
                            </div>
                            <div onClick={this.dropDown} className="bars">
                                <div>Menu</div>
                                <i className="fas fa-bars" />
                            </div>
                        </header>
                        <div className="greeting">
                            <h2 className="size">Welcome To Our Studio!</h2>
                            <h1 className="size2">IT'S NICE TO MEET YOU</h1>
                            <button className="tell-more">TELL ME MORE</button>
                        </div>
                        <div className="page2">
                            <h1>SERVICES</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
