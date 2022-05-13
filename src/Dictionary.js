import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="searchForm">
          <p className="search-header">What word would you like to search?</p>{" "}
          <form onSubmit={handleSubmit}>
            <input
              className="search-bar"
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <input
              className="search-btn btn btn-danger "
              type="submit"
              onClick={search}
              value="Search"
            />
          </form>
          <div className="hint">Suggested Words : sunset, yoga, plant...</div>
          <Results results={results} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
