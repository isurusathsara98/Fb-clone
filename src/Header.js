import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search'; 
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCFjEhm7RIEfIn08Mw39CqlxALWE-7djMj1Q&usqp=CAU" alt=""
            />
            <div className="header__input">
                <SearchIcon/>
                <input placeholder="Search users" type="text"/>
            </div>
        
           </div>
           <div className="header__middle">
              <div className="header__option">
                 <HomeIcon fontSize="large"/>
              </div>
              <div className="header__option">
                 <FlagIcon fontSize="large"/>
              </div>
              <div className="header__option">
                 <SubscriptionsIcon fontSize="large"/>
              </div>
              <div className="header__option">
                 <StorefrontIcon fontSize="large"/>
              </div>
              <div className="header__option">
                 <PeopleIcon fontSize="large"/>
              </div>
           </div>
           <div className="header__right">
           <div className="header__info">
                    <Avatar src=""/>
                     <h4>Isuru Sathsara</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                    <ForumIcon/>
                    <NotificationsActiveIcon/>
                    <ExpandMoreIcon/>
                </IconButton>

           </div>
            
        </div>
    )
}

export default Header
