import React, { useEffect, useState } from 'react'
import './mock.css'
import Pro2 from '../pro2/Pro2'
const myAPI = 'https://692692e426e7e41498fab761.mockapi.io/myAPI'
import axios from 'axios'

function Mock({ onCardClick }) {
    const [ pro, setPro ] = useState( [] )
    const [ loading, setLoading ] = useState( true )
    const [ error, setError ] = useState( null )

    async function renderPro(){
        try{
            setLoading(true)
            const result = await axios.get( myAPI )
            setPro( result.data )
            setError(null)
        }
        catch( error ){
            console.log( error )
            setError('Ошибка загрузки данных. Попробуйте позже.')
        }
        finally{
            setLoading(false)
        }
    }

    useEffect( () => {
        renderPro()
    }, [] )

    if (loading) {
        return (
            <div className='mock-loading'>
                <div className="loading-spinner"></div>
                <p>Загрузка...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className='mock-error'>
                <p>{error}</p>
                <button onClick={renderPro} className="retry-btn">
                    Попробовать снова
                </button>
            </div>
        )
    }

    return (
        <div className='mock'>
            {pro.slice(0, 3).map((el) => (
                <div 
                    key={el.id} 
                    className="mock-card-wrapper"
                    onClick={() => onCardClick(el.id)}
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            onCardClick(el.id)
                        }
                    }}
                >
                    <Pro2 data={el} />
                </div>
            ))}
        </div>
    )
}

export default Mock