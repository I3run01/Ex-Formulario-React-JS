import React, { useState } from "react"

export const Header = () => {
    return (
        <div>
            <label htmlFor="Nome">Nome</label>
            <input type="text"/><br />
            <label htmlFor="Sobrenome">Sobrenome</label>
            <input type="text" name="Sobrenome"/><br />
            <label htmlFor="Idade">Idade</label>
            <input type="text" name="Idade"/><br />
            <hr />

            

        </div>
    )
}