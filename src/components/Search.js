import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { searchJobs } from '../reducers/jobs'
import { unSetLoading, setLoading } from '../reducers/loading'
import { setFormState } from '../reducers/form'
import { resetPageNumber } from '../reducers/pages'
import { hideMore, showMore } from '../reducers/more'

const Search = () => {

    const dispatch = useDispatch()
    const formState = useSelector(state => state.form)

    const handleInputChange = (event) => {
        // const { name, value } = event.target
        // if (name === 'full_time') {
        //     setState((prevState) => ({...state, [name]: !prevState.full_time}))
        // } else {
        //     setState({...state, [name]: value})
        // }

        const { name } = event.target
        if (name === 'full_time') {
            dispatch(setFormState({...formState, [name]: event.target.checked}))
        } else {
            dispatch(setFormState({...formState, [name]: event.target.value}))
        }
    }

    const handleSearch = (event) => {
        event.preventDefault()
        dispatch(setLoading())
        dispatch(searchJobs(formState))
        .then((response) => {
            if (response.data.length === 0){
                dispatch(hideMore())
            } else {
                dispatch(showMore())
            }
            dispatch(resetPageNumber())
            dispatch(unSetLoading())
        })
        .catch(() => {
            dispatch(unSetLoading())
        })
    }

    return(
        <div className='search-section'>
            <Form className='search-form' onSubmit={handleSearch}>
                <Row>
                    <Col>
                    <Form.Group controlId='description'>
                        <Form.Control 
                          type='text'
                          name='description'
                          value={formState.description || ''}
                          placeholder='Enter search'
                          onChange={handleInputChange}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId='location'>
                        <Form.Control 
                          type='text'
                          name='location'
                          value={formState.location}
                          placeholder='Enter Location'
                          onChange={handleInputChange}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Button type='submit' variant='primary' className='btn-search' >Search</Button>
                    </Col>
                </Row>
                <div className='filters'>
                    <Form.Group controlId='full_time'>
                        <Form.Check 
                        type='checkbox'
                        name='full_time'
                        className='full-time-checkbox'
                        label='Full time only'
                        checked={formState.full_time}
                        onChange={handleInputChange}
                        />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default Search