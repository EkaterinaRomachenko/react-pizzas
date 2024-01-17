import style from './search.module.scss';

function Search() {
  return(
    <input className={style.search} placeholder='Поиск пиццы...' />
  )
}

export default Search;
