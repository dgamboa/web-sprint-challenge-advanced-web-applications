import React from 'react';

const AddMenu = ({colorToAdd, saveAdd, setColorToAdd, setAdding}) => {
    return(<form onSubmit={saveAdd}>
        <legend>add color</legend>
        <label htmlFor="colorName">color name:</label>
        <input
          name="colorName"
          id="colorName"
          onChange={(e) =>
            setColorToAdd({ ...colorToAdd, color: e.target.value })
          }
          value={colorToAdd.color}
        />
      
        <label htmlFor="hex">hex code:</label>
        <input
          name="hex"
          id="hex"
          onChange={(e) =>
            setColorToAdd({
              ...colorToAdd,
              code: { hex: e.target.value },
            })
          }
          value={colorToAdd.code.hex}
        />
      
        <div className="button-row">
          <button type="submit">save</button>
          <button onClick={() => setAdding(false)}>cancel</button>
        </div>
    </form>);
}

export default AddMenu;