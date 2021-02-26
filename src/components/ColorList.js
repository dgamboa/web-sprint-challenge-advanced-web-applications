import React, { useState } from "react";
import EditMenu from "./EditMenu";
import AddMenu from "./AddMenu";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const [adding, setAdding] = useState(false);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const addColor = () => {
    setAdding(true);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        updateColors(
          colors.map(color => {
            return (color.id === res.data.id) ? res.data : color
          })
        );
      })
      .catch(err => {
        console.log(err);
      })
  };

  const saveAdd = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/colors`, colorToAdd)
      .then(res => {
        updateColors(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`/api/colors/${color.id}`)
      .then(res => {
        console.log(colors)
        console.log(color)
        console.log(res)
        updateColors(colors.filter(c => c.id !== parseInt(res.data)));
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <p
        style={{color:"green", fontStyle:"italic"}}
        onClick={addColor}
      >
        + add a color
      </p>
      <ul>
        {colors.map(color => (
          <li key={color.id} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }
      { adding && <AddMenu colorToAdd={colorToAdd} saveAdd={saveAdd} setColorToAdd={setColorToAdd} setAdding={setAdding}/> }
    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.