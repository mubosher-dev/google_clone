import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import './Search.css';

function Search({ hideButtons = false }) {

  const [{},dispatch] = useStateValue("");

  const [input, setInput] = useState('');

  let history = useNavigate();

  const search = e => {
    e.preventDefault();

    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input,
    })
    history("/search");
  }
  return (
    <div className='search'>
      <form className='form'>
        <div className="search__input">
          <SearchIcon className="search_icon" />
          <input
            value={input}
            onChange={e => { setInput(e.target.value) }}
          />
          <KeyboardVoiceIcon />
        </div>
        {!hideButtons ? (
          <div className="search__buttons">
            <Button
              onClick={search}
              className="bt_group"
              type="submit"
            > Google Search </Button>
            <Button
              className="bt_group"
            > I'm Feeling Lucky
            </Button>
          </div>
        ) : (
          <div className="search__buttonsHiddens">
            <Button
              onClick={search}
              className="bt_group"
              type="submit"
            > Google Search </Button>
            <Button
              className="bt_group"
            > I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Search;