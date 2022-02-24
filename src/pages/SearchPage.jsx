import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './SearchPage.css';
import UseGoogle from './UseGoogle';
import Response from '../response';
import SearchIcon from '@mui/icons-material/Search';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import DescriptionIcon from '@mui/icons-material/Description';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from '../components/Search';

function SearchPage() {

   const [{ term }, dispatch] = useStateValue();

   // const { data } = UseGoogle(term);

   const data = Response;

   console.log(data);

   return (
      <div className='search_page'>

         <div className="searchPage__header">
            <Link to="/">
               <img
                  className='searchPage__logo'
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google_logo" />
            </Link>

            <div className="searchPage__body">
               <Search hideButtons className="searchInput" />

               <div className="searchPage__options">
                  <div className="searchPage__optionsLeft">
                     <div className="searchPage__option">
                        <SearchIcon />
                        <Link to="/all">All</Link>
                     </div>
                     <div className="searchPage__option">
                        <ImageSearchIcon />
                        <Link to="/images">Image</Link>
                     </div>
                     <div className="searchPage__option">
                        <PlayCircleFilledIcon />
                        <Link to="/video">Video</Link>
                     </div>
                     <div className="searchPage__option">
                        <DescriptionIcon />
                        <Link to="/news">News</Link>
                     </div>
                     <div className="searchPage__option">
                        <AddLocationAltIcon />
                        <Link to="/maps">Maps</Link>
                     </div>
                     <div className="searchPage__option">
                        <MoreVertIcon />
                        <Link to="/more">More</Link>
                     </div>
                  </div>
               </div>
            </div>

         </div>

         {term && (
            <div className="searchPage__results">
               <p className='searchPage__count'>
                  About {data?.searchInformation.formattedTotalResults} results {data?.searchInformation.formattedSearchTime} seconds for {term}
               </p>

               {data.items.map(item => {
                  return (
                     <div className='searchPage__results'>
                        <a href={item.link} target="_blank">
                           {item.displayLink}
                        </a>
                        <a
                           className='searchPage__title'
                           href={item.link} target={"_blank"}>
                           <h2>{item.title}</h2>
                        </a>

                        <p className='searchPage__snippet'>
                           {item.snippet}
                        </p>
                     </div>
                  )
               })}

            </div>
         )}
      </div>
   )
}

export default SearchPage