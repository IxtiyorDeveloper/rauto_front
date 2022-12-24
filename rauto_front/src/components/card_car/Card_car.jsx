import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

import { Language } from '../../lang/Languages'
import { useSelector } from 'react-redux'

const CardCar = ({ car, addCompare }) => {
    const { lang } = useSelector(state => state.lang)

    const { car1 } = Language
    const { car2 } = Language
    const { car3 } = Language
    const { car4 } = Language
    const { car5 } = Language
    const { car6 } = Language

    return (
        <div className='cards__card card'>
            <div className='card__img'>
                <img src={car?.photo?.[0]} alt='img' />
            </div>
            <p className='card__title'>
                {car?.marka} {car?.madel} {car?.yili}{' '}
            </p>
            <div className="cf">
                <div className='card__info'>
                    <div className='card__item'>
                        <span className='material-symbols-outlined'>local_gas_station</span>
                        <strong>{car1[lang]}</strong>
                        {car?.yoqilgi}
                    </div>
                    <div className='card__item'>
                        <span className='material-symbols-outlined'>settings</span>
                        <strong> {car2[lang]}</strong>
                        {car?.transmission}
                    </div>
                </div>
                <div className='card__info'>
                    <div className='card__item'>
                        <span className='material-symbols-outlined'>album</span>
                        <strong> {car3[lang]}</strong>
                        {car?.perevod}
                    </div>
                    <div className='card__item'>
                        <span className='material-symbols-outlined'>speed</span>
                        <strong> {car4[lang]}</strong>
                        {car?.yurgani}
                    </div>
                </div>
            </div>
            <div className='card__line'></div>
            <div className='card__price'>
                Цена: <strong>{Number(car?.narxi).toLocaleString().replace(/,/g, ' ')}</strong>{' '}
                <span>UZS</span>
            </div>
            <Link to={`/more/${car?._id}`} className='card__button'>
                {car5[lang]}
            </Link>
            <div className='card__add'>
                <button onClick={() => addCompare(car)}>
                    {car6[lang]}
                    <button title='Сравнивать' className='material-symbols-outlined'>
                        balance
                    </button>
                </button>
            </div>
        </div>
    )
}

export default CardCar
