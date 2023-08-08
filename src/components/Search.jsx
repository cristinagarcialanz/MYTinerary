import citiesActions from "../redux/actions/citiesActions"
import { useDispatch } from "react-redux"
import SearchIcon from '@mui/icons-material/Search';

function Search(props){
const dispatch = useDispatch()

async function filter(e){

    let searchResult = await props.cities.filter(city=>city.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    dispatch(citiesActions.searchResult(searchResult))
}
    return(
        <div className="inputSearch">
            <input placeholder="Search cities" onChange={(e)=>{filter(e)}}/>
            <SearchIcon />
        </div>
        
    )
}

export default Search;