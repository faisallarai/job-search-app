import { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import LoadingContext from '../contexts/loading'

const Loader = (props) => {

    const { show } = useContext(LoadingContext)

    const [node] = useState(document.createElement('div'))
    const loader = document.querySelector('#loader')

    useEffect(() => {
        loader.appendChild(node).classList.add('message')
    }, [loader, node])

    useEffect(() => {
        if (show) {
            loader.classList.remove('hide')
            document.body.classList.add('loader-open')
        } else {
            loader.classList.add('hide')
            document.body.classList.remove('loader-open')
        }
    }, [loader, show])

    return ReactDOM.createPortal(props.children, node)
}

export default Loader