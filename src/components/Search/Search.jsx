import style from './search.module.scss';

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={style.search}>
      <svg
        className={style.search__icon}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={style.search__input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg onClick={()=> setSearchValue('')}
          className={style.search__iconClose}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      )}
    </div>
  );
}

export default Search;
