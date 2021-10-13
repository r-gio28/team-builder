import React from "react";

function Form(props) {
    const {change, submit, formValues} = props;
    return (
        <div>
            <h1>Sox Form</h1>
            <form onSubmit={submit}>
                <label>Player Name
                <input
                type='text'
                name='playerName'
                value={formValues.playerName}
                onChange={change}
                />
                </label><br/>
                <label>Player Email
                    <input 
                    type='email'
                    name='playerEmail'
                    value={formValues.playerEmail}
                    onChange={change}
                    />
                </label><br/>
                <label>Role
                <select value={formValues.role} name="role" onChange={change}>
            <option value=''>Select a role--</option>
            <option value="Pitcher">Pitcher</option>
            <option value="Catcher">Catcher</option>
            <option value="First Baseman">First Baseman</option>
            <option value="Right Field">Right Field</option>
          </select>
                </label>
                <div className='submit'>
          <button>submit</button>
        </div>
            </form>
        </div>
    )
}
export default Form;