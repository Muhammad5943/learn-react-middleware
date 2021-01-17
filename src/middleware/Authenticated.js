import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'

function Authenticated(props) {
    const history = useHistory()
    const auth = useRecoilValue(authenticated)
    
    useEffect(() => {
        if (!auth.check) {
            history.push('/login')
        }
    }, [])

    /* Cara 1 */
    return props.children

    /* Cara 2 */
    // return props.render
}

export default Authenticated