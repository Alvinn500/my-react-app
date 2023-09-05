// import { Children } from "react"

const Button = (props) => {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${props.color} text-white`} type="submit">
            ${props.text}
        </button>
    );
}

export default Button;