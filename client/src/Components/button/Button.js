import './Button.css';

const Button = (text) => {
    return (
        <button onClick={text.onClick} type="button" className="btn btn-app">{ text.name }</button>
    );
}

export default Button;