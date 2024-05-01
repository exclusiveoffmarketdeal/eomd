import React, { useEffect, useState, useCallback, Component, Fragment } from 'react'
import PropTypes from 'prop-types'
const Autocomplete = ({
  onChange,
  onClick,
  onKeyDown,
  suggestions,
  keyword,
  setKeyword,
  setSuggestions,
  setSuggestionType,
  inputClasses,
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [userTypeInput, setUserTypeInput] = useState('')

  useEffect(() => {
    setUserInput('')
    setUserTypeInput('')
    if (typeof window !== 'undefined') {
      const searchTxt = window.location.search
      if (searchTxt.length) {
        const kws = searchTxt?.split('&')
        const kw = kws[0].split('=')[1]
        const mtype = kws[1].split('=')[1].toLowerCase()
        setUserInput(kw)
        setUserTypeInput(mtype)
        setSuggestions(kw)
        setSuggestionType(mtype)
      }
    }
  }, [])

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word characters
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

  const getDetailURL = (prop) => {
    let nm = prop.name.split(',')
    let address = slugify(nm[0])
    let dwellingType = slugify(prop.dwellingType ?? 'single-family-home')
    let city = slugify(prop.city)
    let state = prop.state.toLowerCase()
    let zip = prop.zip
    let id = prop.value
    return dwellingType + '/' + address + '/' + city + '/' + state + '/' + zip + '/' + id
  }

  onChange = (e) => {
    const userInput = e.currentTarget.value
    let suggestionsX = []
    suggestions.map((item) => {
      suggestionsX.push(item)
    })
    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestionsX.filter(
      (suggestion) => suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )
    setActiveSuggestion(0)
    setFilteredSuggestions(filteredSuggestions)
    setShowSuggestions(true)
    setUserInput(e.currentTarget.value)
    //setSuggestions(e.currentTarget.value)
  }

  onClick = (e) => {
    const currentSuggestion = JSON.parse(e.currentTarget.title)
    setActiveSuggestion(0)
    setFilteredSuggestions([])
    setShowSuggestions(false)
    setUserInput(currentSuggestion.name)
    setUserTypeInput(currentSuggestion.type)
    setSuggestions(currentSuggestion.name)
    setSuggestionType(currentSuggestion.type)
    if (currentSuggestion.type == 'Address') {
      const url = `/homes/${getDetailURL(currentSuggestion)}`
      window.location.replace(url)
      //window.open(url, '_blank', 'noreferrer');
    }
  }

  onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0)
      setShowSuggestions(false)
      setUserInput(filteredSuggestions[activeSuggestion])
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }

      setActiveSuggestion(activeSuggestion - 1)
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }

      setActiveSuggestion(activeSuggestion + 1)
    }
  }

  let suggestionsListComponent

  if (showSuggestions && userInput) {
    if (filteredSuggestions?.length) {
      suggestionsListComponent = (
        <ul className='absolute z-50 bg-white rounded p-4 max-sm:w-full max-md:w-full max-h-[50vh] overflow-y-scroll'>
          {filteredSuggestions?.map((suggestion, index) => {
            let className
            const escapeRegExp = (str = '') => str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
            const regex = new RegExp(`(${escapeRegExp(userInput)})`, 'gi')
            const parts = suggestion.name.split(regex)
            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = 'suggestion-active'
            }

            return (
              <li
                className={className + ' py-1 text-sm'}
                key={index}
                title={JSON.stringify(suggestion)}
                onClick={onClick}
              >
                {parts[0]}
                <span className='font-bold'>{parts[1]}</span>
                <span className='text-neutral-500'>{parts[2]} </span>
                <span className='text-neutral-500'> - {suggestion.type}</span>
              </li>
            )
          })}
        </ul>
      )
    } else {
      suggestionsListComponent = (
        <div className='absolute z-50 bg-white w-[383px] rounded p-4'>
          <em>Sorry, no properties match that request</em>
        </div>
      )
    }
  }

  return (
    <Fragment>
      <input
        type='text'
        name='keywords'
        className={`p-3 rounded max-sm:w-full max-md:w-full ${inputClasses}`}
        placeholder='Address, City, Market'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
      />
      <input type='hidden' name='type' value={userTypeInput} />
      <input type='hidden' name='value' value={userTypeInput} />
      {suggestionsListComponent}
    </Fragment>
  )
}

export default Autocomplete
