import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi'


import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para home
                    </Link>
                </section>
            </div>
            <form>
                <input placeholder="Título do caso" />
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em reais" />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div >
    )
}